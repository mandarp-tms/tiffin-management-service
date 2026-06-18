require('dotenv').config()
const db = require('./src/models')

const PORT = process.env.PORT || 5000

const startServer = async () => {
    try {
        await db.sequelize.authenticate()
        console.log('✅ Database connected successfully')
        console.log(`📦 Environment: ${process.env.NODE_ENV}`)

        // Express app will mount here once routes are added

        console.log(`🚀 Server ready to run on port ${PORT}`)
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message)
        process.exit(1)
    }
}

startServer()