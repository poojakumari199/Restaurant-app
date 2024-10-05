import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const Protected = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('key');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default Protected;
