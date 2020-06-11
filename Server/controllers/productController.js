

const Product=require('../models/productModel');
const factory =require('../controllers/factoryHandler');

exports.GetAll=factory.getAll(Product);

exports.Get=factory.getOne(Product);

