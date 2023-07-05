const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Users = require('./models/user.model')

dotenv.config()

mongoose.connect(process.env.MONGO_URI)

app.use(cors())
app.use(express.json())

app.post('/api/register', async (req, res) => {
    try {
        await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: true })
    } catch (error) {
        res.json({ status: false })
    }
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on ${process.env.SERVER_PORT}`)
})