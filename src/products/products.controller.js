const { default: knex } = require("knex");
const productsService = require("./products.service");

async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

async function list(req, res, next) {
  const data = await productsService.list();
  res.json({ data });
}

function read(product_id) {
  return knex("products").select("*").where({ product_id }).first();
}

module.exports = {
  read: [read, productExists],
  list: [list],
};
