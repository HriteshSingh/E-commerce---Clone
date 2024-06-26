const express = require('express');
const User = require('../modals/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var fetchuser = require('../middleware/fetchuser');
var jwt = require('jsonwebtoken');
const JWT_Secret = "Hriteshisagoodb$oy";

//Route 1: Create a user using: POST '/api/auth/createuser'. No login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast of 5 characters').isLength({ min: 5 }),
], async(req, res)=>{
    let success = false;
    //if there are errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    //Check for the user if already exists
    try {
        
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).json({success, error:"Sorry the user with this email id already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user =await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_Secret)
        success=true;
        res.json({success,authtoken});

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

//Route 2: Authenticate a user using: POST '/api/auth/login'. No login required
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').isLength({ min: 5 }),
], async(req, res)=>{
    let success = false;
      //if there are errors, return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
      }
      
      const {email, password} = req.body;
      try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success, error: "Please login with correct credentials"});
        }
        
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success, error: "Please login with correct credentials"});
        }
        
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_Secret)
        success = true;
        res.json({success,authtoken});

      } 
      catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
      }
})

//Route 3: Get the details of user logged-in using: POST '/api/auth/getuser'. Login required
router.post('/getuser', fetchuser ,async(req, res)=>{
try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} 
catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error")
}
})

// Route 4: Update user password using: PUT '/api/auth/updatepassword'. Login required
router.put('/updatepassword', fetchuser, [
    body('password', 'New password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.user.id;
    const user = await User.findById(userId);

    const { password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const newSecPass = await bcrypt.hash(password, salt);

    user.password = newSecPass;
    await user.save();

    res.json({ message: "Password updated successfully" });
});



module.exports = router;