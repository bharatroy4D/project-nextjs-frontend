import { NavigationBar } from '@/components/shared/navbar';
import React from 'react';

const PublicLayout = (
    {
        children
    }: {
        children: React.ReactNode
    }) => {
    return (
        <div>
            <NavigationBar/>
            {children}
        </div>
    );
};

export default PublicLayout;