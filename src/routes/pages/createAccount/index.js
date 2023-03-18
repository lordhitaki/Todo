import React from "react"
import { View,
         Text,
         TouchableOpacity,
         TextInput,
         Image,
         Linking } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'


export default function Create(){
    const navigation = useNavigation();

    return(
    <View style={styles.tela}>
        <View style={styles.boxIcon} >
            <TouchableOpacity>        
                <Icon name="arrow-left" size={20} color="#fff"
                onPress={() => navigation.navigate('Welcome')} />
            </TouchableOpacity>
        </View>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.boxTextLogin}>
            <Text style={styles.textLogin}>
                Register
            </Text>
        </Animatable.View>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.boxinputs}>
               <View>
                <Text style={styles.textInputs}>Nome de usario</Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite aqui seu nome de usuario..." 
                    placeholderTextColor="#494949" />
                <Text style={styles.textInputs}>Senha</Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite aqui sua senha..." 
                    placeholderTextColor="#494949" 
                    secureTextEntry= {true}/>
                <Text style={styles.textInputs}>
                    Confirme sua senha
                </Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite novamente sua senha..." 
                    placeholderTextColor="#494949"
                    secureTextEntry= {true} />
               </View>
            </Animatable.View>
            <Animatable.View>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textLogin2}>
                        Login
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
            <View style={styles.linhaVertical}>
            <View style={styles.linhaVertical2} />
            <View>
                <Text style={styles.textVertical}>Or</Text>
            </View>
            <View style={styles.linhaVertical3} />
            </View>
            <Animatable.View style={styles.boxGoogle}>
                <TouchableOpacity
                style={styles.buttonGoogle}>
                    <Image source={require('../../../Componets/Img/google.png')}/>
                    <Text style={styles.textGoogle}>
                        Acessar com Google
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View style={styles.boxApple}>
                <TouchableOpacity
                style={styles.buttonApple}>
                    <Image source={require('../../../Componets/Img/apple.png')}/>
                    <Text style={styles.textApple}>
                        Acessar com Apple
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
            <View style={styles.boxRegister}>
                <Text style={styles.textRegister}>
                    Don't a have an account?
                </Text>
                <Text
                style={styles.linkinRegister}
                onPress={() => navigation.navigate('SignIn')}>
                    Login
                </Text>
            </View>
    </View>
    )
}