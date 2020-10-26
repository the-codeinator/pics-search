import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 2E1vyFmLbcJwMX3hpvw68eo_GsP18TzvAmTeqOJkVa4' 
    }
})