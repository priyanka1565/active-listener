const Product = require('../model/product');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
   
    res.status(201).send(product);
  } catch (error) {
    console.log(error)
   res.status(400).send(error);
    
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update product by ID
const updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'category', 'file']; // define allowed fields to be updated
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }

    updates.forEach(update => product[update] = req.body[update]);
    await product.save();

    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
