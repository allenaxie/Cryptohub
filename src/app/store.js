// Single state of truth for Redux
import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi} from '../services/cryptoApi'; // Connect Crypto API with store
import { cryptoNewsApi} from '../services/cryptoNewsApi'; // Connect Crypto News API to store


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})