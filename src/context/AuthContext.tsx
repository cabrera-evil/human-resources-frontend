import React, { createContext, useState, useEffect, FC } from 'react';

interface AuthContextType {
    token: string | null;
    checkToken: () => void;
    updateToken: (newToken: string, remember: boolean) => void;
    deleteToken: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    // First, try to get the token from localStorage
    const checkToken = () => {
        const localToken = localStorage.getItem('token');
        const sessionToken = sessionStorage.getItem('token');
        setToken(localToken ?? sessionToken);
    };

    const updateToken = (newToken: string, remember: boolean) => {
        setToken(newToken);
        remember ? localStorage.setItem('token', newToken) : sessionStorage.setItem('token', newToken);
    };

    const deleteToken = () => {
        setToken(null);
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    };

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <AuthContext.Provider value={{ token, checkToken, updateToken, deleteToken }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const authContext = React.useContext(AuthContext);

    if (!authContext) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return authContext;
};

export { AuthProvider, useAuth };
