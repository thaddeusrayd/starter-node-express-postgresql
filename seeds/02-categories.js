const categories = require("../src/db/fixtures/categories");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("categories").insert(categories);
    });
};
