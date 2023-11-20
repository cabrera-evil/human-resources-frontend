import { jwtDecode } from 'jwt-decode';
import React, { createContext, useState, useEffect, FC } from 'react';
import { User } from '../pages/Users/models/User.interface';

interface RoleContextType {
    role: string | null;
    checkRole: () => void;
    updateRole: (newRole: string) => void;
}

const RoleContext = createContext<RoleContextType | null>(null);

interface RoleProviderProps {
    children: React.ReactNode;
}

const RoleProvider: FC<RoleProviderProps> = ({ children }) => {
    const [role, setRole] = useState<string | null>(null);

    const checkRole = () => {
        const localToken = localStorage.getItem('token');
        const sessionToken = sessionStorage.getItem('token');
        if(localToken) {
            const decode: User = jwtDecode(localToken);
            setRole(decode.role);
        }
        else if(sessionToken) {
            const decode: User = jwtDecode(sessionToken);
            setRole(decode.role);
        }
    };

    const updateRole = (encryptedToken: string) => {
        const decode: User = jwtDecode(encryptedToken);
        setRole(decode.role);
    };

    useEffect(() => {
        checkRole();
    }, []);

    return (
        <RoleContext.Provider value={{ role, checkRole, updateRole }}>
            {children}
        </RoleContext.Provider>
    );
};

const useRole = () => {
    const authContext = React.useContext(RoleContext);

    if (!authContext) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return authContext;
};

export { RoleProvider, useRole };
