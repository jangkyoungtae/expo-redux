import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Stack from './Navigation/Stack';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack />
      </NavigationContainer>
      <StatusBar />
    </Provider>
  );
}

