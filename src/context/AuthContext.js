import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    return (
        <Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
            }}>
            {children}
        </Provider>
    );
};

export default AuthContext;
