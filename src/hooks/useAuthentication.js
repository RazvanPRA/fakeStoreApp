/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const useAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [loginError, setLoginError] = useState(null);


    const logIn = userData => {
        console.log({ userData });
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(json => {
                if (json?.token) {
                    setIsLoggedIn(true);
                }
            })
            .catch(error => {
                console.log({ error });
                setLoginError(error);
            });
    };

    return {
        isLoggedIn,
        loginError,
        logIn,
    };
};

export default useAuthentication;
