const { default: knex } = require("knex");
const productsService = require("./products.service");

function read(req, res, next) {
  res.json({ data: { product_title: "some product title" } });
}

function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function read(product_id) {
  return knex("products").select("*").where({ product_id }).first();
}

module.exports = {
  read: [read],
  list: [list],
};
