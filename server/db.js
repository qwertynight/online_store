const {Sequelize} = require('sequelize')

// The {new} lets developers create an instance 
// of a user-defined object type or of one of the built-in object 
// types that has a constructor function.
module.exports = new Sequelize(  
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)