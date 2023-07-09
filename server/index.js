const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('./models/user.model')

dotenv.config()

mongoose.connect(process.env.MONGO_URI)

app.use(cors())
app.use(express.json())

app.post('/api/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.json({ status: true })
    } catch (error) {
        res.json({ status: false })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    try {
        const match = await bcrypt.compare(req.body.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.JSONWEBTOKENS_SECRET)
        
        
        if(match){
            res.json({ status: true, accessToken: accessToken });
        } else {
            res.json({ status: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        res.json({ message: error })
    }
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on ${process.env.SERVER_PORT}`)
})