const { default: knex } = require("knex");
const productsService = require("./products.service");

function productExists(req, res, next) {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
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
  read: [read, productExists],
  list: [list],
};
