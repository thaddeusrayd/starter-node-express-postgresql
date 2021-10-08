const productsCategories = require("../src/db/fixtures/productsCategories");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("products_categories").insert(productsCategories);
    });
};
