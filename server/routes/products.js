const express = require('express');
const router = express.Router();
const Product = require('../model/product');
router.get('', (req, res) => {
    Product.find({}, function(err, findProducts) {
        return res.json(findProducts);
    });
});

router.get('/:productId', (req, res) => {
    const productId = req.params.productId;
    Product.findById(productId, function(err, findProduct) {
        if (err) return res.status(422).send({ errors: [{ title: 'Product error', detail: 'Product not found!' }] });
        return res.json(findProduct);
    });
});
module.exports = router;