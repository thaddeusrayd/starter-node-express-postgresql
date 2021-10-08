exports.up = function (knex) {
  return knex.schema.createTable("products_categories", (table) => {
    table.increments("category_id").primary();
    table.increments("product_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products_categories");
};
