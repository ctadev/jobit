import { configureStore } from '@reduxjs/toolkit';

import isMobileReducer from './redux/isMobileSlice';

export const store = configureStore({
    reducer: {
        isMobile: isMobileReducer,
    },
});
