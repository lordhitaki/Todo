import {  View, 
          StatusBar,
          SafeAreaView, 
          } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/routes';

export default function App() {
  return (
   <NavigationContainer>
    <StatusBar 
    backgroundColor="#000000" barStyle="light-content"/>
      <Routes/>
   </NavigationContainer>
  );
}


