const express = require('express');
const { check, validationCheck, validationResult } = require('express-validator');
const auth = require('./../middleware/auth');
const router = express.Router();
const Product = require('./../models/Product');
// @route   GET api/products
// @desc    Get all products 
// @access  Public 

router.get('/', async (req,res)=>{
    try {
        const products = await Product.find().sort({date: -1});
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// @route   POST api/products
// @desc    Create product
// @access  Private

router.post('/',[auth,[
    check('title','Please provide a name.').not().isEmpty(),
    check('price','Please provide a price.').not().isEmpty()
]] , async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const { title, price, description, imagePaths } = req.body;
    try {
        const newProduct = new Product({
            title,
            price,
            description,
            imagePaths
        });
         const product = await newProduct.save();
         res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   PATCH api/products/:id
// @desc    Update product
// @access  Private

router.put('/:id', async (req,res)=>{
    const { title , price , description, imagePaths
     } = req.body;
     const productFields = {};
     if(title) productFields.title = title;
     if(price) productFields.price = price;
     if(description) productFields.description = description;
     if(imagePaths) productFields.imagePaths = imagePaths;
     try {
         let product = await Product.findById(req.params.id);
         if(!product) return res.status(404).json({msg: "Product not found"});
         product = await Product.findByIdAndUpdate(req.params.id,
            { 
                $set: productFields,
                new: true
             }
            );
            res.json({product});       
     } catch (error) {
         console.error(error.message);
         res.status(500).send('Server error');
     }
});

// @route   PATCH api/products/:id
// @desc    Delete product
// @access  Private

router.delete('/:id',auth, async (req,res)=>{
    try {
        let product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({msg: "Product not found"});
        await Product.findByIdAndRemove(req.params.id);
        res.json({msg:"Product deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;