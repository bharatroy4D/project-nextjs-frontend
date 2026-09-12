import { Navbar} from '@/components/shared/navbar';
import { getMe } from '@/services/getMe';
import React from 'react';

const AuthLayout = async (
    {
        children
    }: {
        children: React.ReactNode
    }) => {
    const user =  getMe();
    return (
        <div>
            <Navbar user={user} />
            {children}
        </div>
    );
};

export default AuthLayout;