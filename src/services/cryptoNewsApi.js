import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
var key = process.env.REACT_APP_RAPIDAPI_KEY;

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': key,
}

console.log(key)
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => 
            // parameters from bing news API
            createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { 
    // Redux toolkit Hook: "use<EndpointProp>Query"
    useGetCryptoNewsQuery 
}
    = cryptoNewsApi;