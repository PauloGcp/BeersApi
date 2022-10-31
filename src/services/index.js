import axios from 'axios';

export const BASE_URL = 'https://api.punkapi.com/v2/'

export default axios.create({
    baseURL:BASE_URL
})