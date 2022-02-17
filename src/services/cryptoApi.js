import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders= {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '45dc652efbmshca6514dd5735400p17a824jsn755cde182ad4',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    // Endpoints to fetch data
    endpoints: (builder) => ({
        // Crypto index
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        // CryptoDetails
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        // Line Chart
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
        }),
    })
})



export const {
    // Redux toolkit Hook 
    useGetCryptosQuery, //(from getCryptos endpoint property)
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;