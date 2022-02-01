// Single state of truth for Redux
import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi} from '../services/cryptoApi'; // Connect Crypto API with store

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})