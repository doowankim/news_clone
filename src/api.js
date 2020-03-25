import axios from 'axios';

const api = axios.create({
    baseURL: "https://newsapi.org/v2/",
    params: {
        api_key: "d424d6d114074feb80c770e97742831a",
        language: "en-US"
    }
});

export const topApi = {
    countryUs: () => api.get("top-headlines/country=us"),
    bbcNews: () => api.get("top-headlines/sources=bbc-news"),
    business: () => api.get("top-headlines/country=de&category=business")
};

export const everythingApi = {
    apple: () => api.get("everythings/q=apple&from=2020-03-24&to=2020-03-24&sortBy=popularity"),
    bitcoin: () => api.get("everythings/q=bitcoin")
};