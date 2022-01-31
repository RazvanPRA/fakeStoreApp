import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AuthContext from '../context/AuthContext';

const AppNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNavigator;
