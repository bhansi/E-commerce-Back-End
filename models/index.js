const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category >--1-------M--> Product //
Category.hasMany(Product);
Product.belongsTo(Category);

// Product <--M----ProductTag----M--> Tag //
Product.belongsToMany(Tag, {
  through: ProductTag
});
Tag.belongsToMany(Product, {
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
