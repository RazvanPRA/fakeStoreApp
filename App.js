import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useAuthentication from './src/hooks/useAuthentication';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

const App: () => Node = () => {
  const { isLoggedIn } = useAuthentication();
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
