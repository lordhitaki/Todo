import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/welcome";
import SignIn from "./pages/signIn";
import Create from "./pages/createAccount";
import HomeScreen from "./pages/home/homeScreen";
import Index1 from "./pages/index/index1"


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Index1" 
            component={Index1}
            options={{headerShown: false}} />
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