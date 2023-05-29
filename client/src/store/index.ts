import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './slices/currentUserSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '@/services/userService';

export const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        currentUser: currentUserReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
