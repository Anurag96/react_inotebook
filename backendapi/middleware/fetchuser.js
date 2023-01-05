const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = 'Anuragisagoodb@y'

const fetchuser = (req, res, next) => {

    const token = req.header('auth-token')
    //TOken is being fetched from header
    // console.log(token);
    if (!token) {
        res.status(401).send({ error: "Please authenticate a valid token" })
    }

    try {
        // jwt.verify verify a token symmetric - synchronous
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()

    } catch (error) {
        res.status(401).send({ error: "Please authenticate a valid token" })
    }

}

module.exports = fetchuser