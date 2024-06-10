import axios from 'axios';

const service = axios.create({
    baseURL: process.env.BASE_URL,
    // timeout: 50000,
    // headers: { 'Content-Type': 'application/json' }
})

export default service