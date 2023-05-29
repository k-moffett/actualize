import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../../shared';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    endpoints: (builder) => ({
        getUser: builder.query<User, string>({
            query: () => '/',
        }),
    }),
});

export const { useGetUserQuery } = userApi;
