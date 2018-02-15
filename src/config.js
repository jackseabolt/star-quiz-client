require('dotenv').load();
 
module.exports = {
    DATABASE_URL: process.env.REACT_APP_DATABASE_URL || 'http://localhost:8080'
} 