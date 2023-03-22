import React from "react"
import { View,
         Text,
         TouchableOpacity,
         TextInput,
         Image,
         Linking,
         TouchableWithoutFeedback,
         Keyboard } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'
import styles from "./style";

export default function HomeScreen(){
    const navigation = useNavigation();

    return(
<TouchableWithoutFeedback
    touchSoundDisabled
    onPress={() => Keyboard.dismiss()}>
    <View style={styles.tela}>
       <Text style={styles.textHome}> Home </Text>
    </View>
</TouchableWithoutFeedback>
    )
}
