#include <stdio.h>
#include <string.h>

#include <groonga.h>

int main(void) {
  grn_ctx ctx;

  grn_init();
  grn_ctx_init(&ctx, 0);

  grn_obj *db = grn_db_open(&ctx, "<DB PATH>");
  if (!db) {
    // Error handling
    grn_ctx_fin(&ctx);
    grn_fin();
    return 1;
  }

  grn_obj *table = grn_ctx_get(&ctx, "Entries", -1);
  if (!table) {
    // Error handling
    grn_ctx_fin(&ctx);
    grn_fin();
    return 1;
  }

  // Filter by grn_table_select()
  const char *query = "content @ \"fast\"";
  grn_obj *expression = NULL;
  grn_obj *dummy_variable;
  GRN_EXPR_CREATE_FOR_QUERY(&ctx, table, expression, dummy_variable);
  grn_expr_parse(&ctx, expression, query, strlen(query), NULL, GRN_OP_MATCH, GRN_OP_AND, GRN_EXPR_SYNTAX_SCRIPT);
  grn_obj *filtered = grn_table_select(&ctx, table, expression, NULL, GRN_OP_OR);
  grn_obj_close(&ctx, expression);

  // Grouping by grn_table_group()
  int n_keys = 0;
  const char *column_name = "tag";
  grn_table_sort_key *keys = grn_table_group_keys_parse(&ctx,
                                   filtered,
                                   column_name,
                                   strlen(column_name),
                                   &n_keys);
  grn_table_group_result result = {0};
  result.flags = GRN_TABLE_GROUP_CALC_COUNT;
  grn_table_group(&ctx, filtered, keys, n_keys, &result, 1);
  grn_table_sort_key_close(&ctx, keys, n_keys);

  // Get results
  void *key;
  int key_size;
  grn_obj value;
  GRN_VOID_INIT(&value);
  GRN_TABLE_EACH_BEGIN(&ctx, result.table, cursor, id)
  {
    key_size = grn_table_cursor_get_key(&ctx, cursor, &key);
    GRN_BULK_REWIND(&value);
    grn_obj *column = grn_obj_column(&ctx, result.table, GRN_COLUMN_NAME_NSUBRECS, GRN_COLUMN_NAME_NSUBRECS_LEN);
    grn_obj_get_value(&ctx, column, id, &(value));
    grn_obj_unlink(&ctx, column);
    printf("key: %.*s, _nsubrecs: %d\n", key_size, (char *)key, GRN_INT32_VALUE(&value));
  }
  GRN_TABLE_EACH_END(&ctx, cursor);
  GRN_OBJ_FIN(&ctx, &value);
  grn_obj_unlink(&ctx, result.table);

  grn_obj_close(&ctx, db);
  grn_ctx_fin(&ctx);
  grn_fin();

  return 0;
}
