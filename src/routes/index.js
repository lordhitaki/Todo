import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/welcome";
import SignIn from "./pages/signIn";
import Create from "./pages/createAccount";
import HomeScreen from "./pages/home/homeScreen";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Welcome"
             component={Welcome}
             options={{headerShown: false}} />
            <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown: false}} />
            <Stack.Screen 
            name="Create" 
            component={Create}
            options={{headerShown: false}} />
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{headerShown: false}} />
        </Stack.Navigator>
    )
}