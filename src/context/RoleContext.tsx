import { jwtDecode } from 'jwt-decode';
import React, { createContext, useState, useEffect, FC } from 'react';

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

    // First, try to get the role from localStorage
    const checkRole = () => {
        const localToken = localStorage.getItem('token');
        const sessionToken = sessionStorage.getItem('token');
        setRole(localToken ?? sessionToken);
    };

    const updateRole = (encryptedToken: string) => {
        const decode: any = jwtDecode(encryptedToken);
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
