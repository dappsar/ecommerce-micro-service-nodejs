const mongoose = require('mongoose')
const { DB_URL } = require('../config')

console.log(DB_URL)

module.exports = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Db Connected')
        
    } catch (error) {
        console.log('Error ============')
        console.log(error)
        process.exit(1)
    }
 
}

 