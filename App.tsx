import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <Routes />
    </NavigationContainer>
  );
}
