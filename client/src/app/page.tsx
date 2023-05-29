'use client';

import variables from '@/styles/colors.module.scss';
import { useAppSelector } from '@/hooks';
import { useGetUserQuery } from '@/services/userService';
import { useEffect } from 'react';

export default function Root() {
    const currentUser = useAppSelector((state) => state.currentUser.currentUser);
    const { data, error, isLoading } = useGetUserQuery('');

    useEffect(() => {
        console.log('DATA: ', data);
    }, [ data ]);

    return (
        <>
            <div style={{ color: variables.primaryColor }}>{ currentUser.userId }</div>
        </>
    );
}
