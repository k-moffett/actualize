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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi;
