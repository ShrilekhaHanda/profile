import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.linkedin.com',
    headers: {
        'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Request-Headers':'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type':'application/x-www-form-urlencoded'
    }
    // headers: {
    //     Authorization: 'Client-ID 0c5e188dac6f92fa3d2c711e22f00d3c03ebe5f9b6eacf3c234eec5f2c03e466'
    // }
});//https://www.linkedin.com/oauth/v2/accessToken