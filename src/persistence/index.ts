if (process.env.DB_NAME) {
    module.exports = require('./mongo');
} else {
    console.log ('error', 'MONGO ENVIRONMENT VAR IS NOT SET')
}
