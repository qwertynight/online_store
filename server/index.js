require('dotenv').config()

const express = require('express') // Node.js Framework 
const PORT = process.env.PORT || 5000
// const models = require('./models/models')
const cors = require('cors') // For sending requests to Database
const sequelize = require('./db') // For connecting to Database 
const fileUpload = require('express-fileupload')
const router = require('./routes/index') // Importing routers
const errorHandler = require('./middleware/errorHandlerMiddleware')
const path = require('path')
const app = express() // connecting for the app
app.use(cors()) // Using cors to send requets to DB
app.use(express.json()) // To read json format
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

// Middleware that works errors must always be last 
app.use(errorHandler)

const start = async () => { 
    try {
        await sequelize.authenticate() // connecting to the database 
        await sequelize.sync() 
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()