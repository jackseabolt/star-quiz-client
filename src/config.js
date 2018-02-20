require('dotenv').load();

module.exports = {
    API_BASE_URL: process.env.REACT_APP_DATABASE_URL || 'http://localhost:8080'
} 


