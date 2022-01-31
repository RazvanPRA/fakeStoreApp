import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';
import { TITLE } from '../const/CONTENT/HomeContent';

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
            options={{
                headerShown: false,
            }}
            name="HomeScreen"
            component={HomeScreen}
        />
        <Stack.Screen
            options={{
                title: TITLE,
                headerTitleAlign: 'center',
            }}
            name="ItemScreen"
            component={ItemScreen}
        />
    </Stack.Navigator>
);

export default AppStack;
