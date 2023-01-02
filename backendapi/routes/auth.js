const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Anuragisagoodb@y'

//Create a User using: POST "/api/auth/createuser", No login required
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name & 3 character min').isLength({ min: 3 }),
    body('password', 'Password must be atleast 5 character').isLength({ min: 5 })
], async (req, res) => {
    //Made the above function async await

    //If there are any error,return BAd request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // User(req.body).save()
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Email is already in used" })
        }

        //Adding bycrypt gebSalt
        const salt = await bcrypt.genSalt(10);

        let secPass = await bcrypt.hash(req.body.password, salt)
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({ authtoken })
        // res.json({ "User": "has been created" })

    } catch (error) {
        console.log(error)
        res.status(500).send("Some error occured")
    }
})

//Authenticat a User using: POST "/api/auth/login", No login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can\'t be blanck').exists()
], async (req, res) => {
    //If there are any error,return BAd request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //By array destructing we will get email & password

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credential" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credential" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({ authtoken })

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error occured")
    }

})


module.exports = router