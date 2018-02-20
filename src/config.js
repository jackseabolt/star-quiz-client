
if (process.env !== 'production'){
    module.exports = {
        API_BASE_URL: 'http://localhost:8080'
    }  
} else {
    module.exports = {
        API_BASE_URL: 'https://star-quizes-api.herokuapp.com'
    }
}




