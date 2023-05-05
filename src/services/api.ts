import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://chakra-peach-theta.vercel.app/api/', // parte que se repete
})