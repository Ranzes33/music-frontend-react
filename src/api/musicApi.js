import axios from 'axios';

export const musicApi = axios.create({
    baseURL: 'https://backend-music-api.herokuapp.com/api/v1'
})
