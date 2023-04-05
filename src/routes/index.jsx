import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './pages/welcome';
import Create from './pages/createAccount';
import HomeScreen from './pages/home/homeScreen';
import Index from './pages/index/index';
import SignIn from './pages/signIn/index';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create"
        component={Create}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
