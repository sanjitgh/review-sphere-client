import React, { useContext } from 'react';
import { AuthContext } from '../provaider/AuthProvaider';

const useAuth = () => {
    const context = useContext(AuthContext);
    return context
};

export default useAuth;