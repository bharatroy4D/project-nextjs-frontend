import { NavigationBar } from '@/components/shared/navbar';
import React from 'react';

const AuthLayout = (
    {
        children
    }: {
        children: React.ReactNode
    }) => {
    return (
        <div className=''>
            <NavigationBar/>
            {children}
        </div>
    );
};

export default AuthLayout;