import React from 'react';
import Header from '../../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import LoginHeder from '../../pages/shared/Header/LoginHeder';

const LoginLayout = () => {
    return (
        <div>
            <LoginHeder />
            <Outlet />
        </div>
    );
};

export default LoginLayout;