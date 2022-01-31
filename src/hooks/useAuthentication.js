/* eslint-disable prettier/prettier */
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const useAuthentication = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const logIn = userData => {
        if (!userData.username || !userData.password) {
            setLoginError('Please use your username and password');
            return;
        }
        setIsLoading(true);
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => {
                console.log({ res: res?.status });
                if (res?.status !== 200) { setLoginError('Please use a valid username and password'); }
                return (res.json());
            })
            .then(json => {
                if (json?.token) {
                    setIsLoggedIn(json.token);
                }
            })
            .catch(error => {
                console.log({ error: JSON.stringify(error) });
            })
            .finally(() => { setIsLoading(false); });

    };

    return {
        loginError,
        setLoginError,
        isLoading,
        logIn,
    };
};

export default useAuthentication;
