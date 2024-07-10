const Product = require('../models/productsModel');

const addProducts = async (req, res) => {
  const query = req.body;
  try {
    const result = await Product.create(query);
    // console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProducts = async (req, res) => {
  try {
    const result = await Product.find().sort({ createdAt: -1 });
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findOne({ _id: id });
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({
      message: 'Product deleted successfully',
      deletedProduct: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

module.exports = {
  addProducts,
  getProducts,
  getSingleProduct,
  deleteProduct,
};
