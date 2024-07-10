const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router
  .route('/')
  .get(productsController.getProducts)
  .post(productsController.addProducts);

module.exports = router;
