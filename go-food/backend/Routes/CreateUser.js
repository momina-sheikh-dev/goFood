const express= require('express');
const router =  express.Router();
const user = require('../models/User');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post("/createuser", [
   // username must be an email
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password', 'Incorrect password').isLength({ min: 5 }),
  body('name').isLength({ min: 5 })],
    async(req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

    try{
        await User.create({
             name: req.body.name,
             password: req.body.password,
             email: req.body.email,
             location:req.body.location
        });
        res.json({success: true });
        }   
    catch(e){
            console.log(e);
            res.json({success: false});
            }
})




router.post("/loginuser", [
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Incorrect password').isLength({ min: 5 })
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const userdata = await User.findOne({ email });

        if (!userdata) {
            return res.status(400).json({ success: false, error: "User not found" });
        }

        // Here you should compare hashed passwords
        if (password !== userdata.password) {
            return res.status(400).json({ success: false, error: "Incorrect password" });
        }

        return res.json({ success: true });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

module.exports = router;
