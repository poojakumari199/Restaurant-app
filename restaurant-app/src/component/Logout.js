import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

const Logout = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        localStorage.clear(); // Clear local storage
        navigate('/login'); // Navigate to the login page
    }, [navigate]); // Dependency array includes navigate to avoid warnings

    return null; // Render nothing or a loading indicator if needed
};

export default Logout;
