const Product = require('../models/productsModel');

const addProducts = async (req, res) => {
  const query = req.body;
  try {
    const result = await Product.create(query);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProducts = async (req, res) => {
  const query = req.body;
  try {
    const result = await Product.find();
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  addProducts,
  getProducts,
};
