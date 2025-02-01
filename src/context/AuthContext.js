
// context for authentication modal open/close
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthModalOpen, setIsAuthModalOpen }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
