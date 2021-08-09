import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../conponents/Home';
import Detail from '../conponents/Detail';

const Stack = createStackNavigator();
export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerTintColor: '#000000',

                headerBackTitleVisible: true,
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />          
        </Stack.Navigator>
    );
};
