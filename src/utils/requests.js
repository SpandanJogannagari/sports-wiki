import axios from "axios";

const apiConfig = {
    baseURL: 'https://v3.football.api-sports.io/',
    responseType: 'json',
    headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
    }
};

const API = axios.create(apiConfig);

const requests = { api: API, tis: "myfuck" };

export default requests;
