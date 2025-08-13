import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'
import Loading from './Loading';

const ProtectedRoutes = () => {

    const { currentUser, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    return (
        currentUser ? <Outlet /> : <Navigate to="/login" replace />
    )
}

export default ProtectedRoutes