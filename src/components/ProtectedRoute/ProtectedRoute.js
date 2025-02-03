import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoginAuth } from '../../context/AuthLoginContext';

const ProtectedRoute = () => {
    const { user } = useLoginAuth();

    if (!user) {
        // If there is no user, redirect to the login page
        return <Navigate to="/" replace />;
    }

    // Otherwise, render the protected component
    return <Outlet />;
};

export default ProtectedRoute;
