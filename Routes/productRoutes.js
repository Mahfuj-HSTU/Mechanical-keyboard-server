const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router
  .route('/')
  .get(productsController.getProducts)
  .post(productsController.addProducts);
router.route('/:id').get(productsController.getSingleProduct);
router.route('/:id').delete(productsController.deleteProduct);
router.route('/:id').put(productsController.updateProduct);

module.exports = router;
