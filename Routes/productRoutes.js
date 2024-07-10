const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.route('/').post(productsController.addProducts);

module.exports = router;
