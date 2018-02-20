
console.log(process.env)


if (process.env.NODE_ENV === 'development'){
    module.exports = {
        API_BASE_URL: 'http://localhost:8080'
    }  
} else {
    module.exports = {
        API_BASE_URL: 'http://star-quizes-api.herokuapp.com'
    }
}





