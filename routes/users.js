const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check , validationResult } = require('express-validator');

const User = require('./../models/User');

// @route   POST api/users
// @desc    Register a user 
// @access  Public 

router.post('/',[
    check('firstName','Please include first name.').not().isEmpty(),
    check('lastName','Please include last name.').not().isEmpty(),
    check('email','Please include a valid email.').isEmail(),
    check('password','Please include a password with more than 6 characters.').isLength({min:6})
], async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() , msg:'User data is not valid'});
    }

    const { email , 
        firstName, 
        lastName,
        password,
        phone,
        billAddress,
        billPostalCode,
        billCity,
        billCounty,
        shipAddress,
        shipPostalCode,
        shipCity,
        shipCounty
     } = req.body;

    try {
        let user = await User.findOne({email:email});
        if(user){
            return res.status(400).json({ msg:'User already exists'  } );
        }
        user = new User({
            firstName,
            lastName,
            email,
            password,
            phone,
            shipAddress,
            shipPostalCode,
            shipCity,
            shipCounty,
            billAddress,
            billPostalCode,
            billCity,
            billCounty
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        const payload  = {
            user :{
                id:user.id
            }
        }
        jwt.sign(payload,  config.get('jwtSecret'), { expiresIn: 3600 }, (error,token)=>{ 
            if(error) throw error;
            res.json({token});
         });
    
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
    
});


module.exports = router;