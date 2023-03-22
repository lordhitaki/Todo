import React, { useState } from "react"
import { View,
         Text,
         TouchableOpacity,
         TextInput,
         Image,
         Linking,
         TouchableWithoutFeedback,
        Keyboard } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'


export default function SignIn(){

    const [username, setUsername ] = useState(null)
    const [password, setPassword] = useState(null)

        function Login(){
            if(username === '' || password ==='' || password.length < 4){
                alert("Preencha todos os campos")
            }else{
            const data = {
                username,
                password,
            }
            console.log(data)
        }
        }

    async function handleGoogleSignIn(){
        try{
            const CLIENT_ID = "914137362311-3usd49uujt8sapekd5946vntdhte04h9.apps.googleusercontent.com";
            const REDIRECT_URI = "https://auth.expo.io/@lasthitaki/Todo";
            const SCOPE = encodeURI("profile email"); 
            const RESPONSE_TYPE = "token";

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            await AuthSession.startAsync({ authUrl });

        } catch(error){
            console.log(error)
        }
    }

    const navigation = useNavigation();

    return(
    <TouchableWithoutFeedback
    touchSoundDisabled
    onPress={() => Keyboard.dismiss()}>
        <View style={styles.tela}>
            <View style={styles.boxIcon} >
                <TouchableOpacity>        
                    <Icon name="arrow-left" size={20} color="#fff"
                    onPress={() => navigation.navigate('Welcome')} />
                </TouchableOpacity>
            </View>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.boxTextLogin}>
                <Text style={styles.textLogin}>
                    Login
                </Text>
            </Animatable.View>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.boxinputs}>
               <View>
                <Text style={styles.textInputs}>Nome de usario</Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite aqui seu nome de usuario..." 
                    placeholderTextColor="#494949" 
                    onChangeText={setUsername}
                    value={username}/>
                <Text style={styles.textInputs}>
                    Senha
                </Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite aqui sua senha..." 
                    placeholderTextColor="#494949"
                    secureTextEntry= {true}
                     onChangeText={setPassword}
                    value={password}
                    />
               </View>
            </Animatable.View>
            <Animatable.View>
                <TouchableOpacity style={styles.buttonLogin}
                onPress={() => Login(navigation.navigate("HomeScreen"))}>
                    <Text style={styles.textLogin2}>
                        Login
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
            <View style={styles.linhaVertical}>
            <View style={styles.linhaVertical2} />
            <View>
                <Text style={styles.textVertical}>Ou</Text>
            </View>
            <View style={styles.linhaVertical3} />
            </View>
            <Animatable.View style={styles.boxGoogle}>
                <TouchableOpacity
                style={styles.buttonGoogle}
                onPress={handleGoogleSignIn}>
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
                    Não tem uma conta?
                </Text>
                <Text
                style={styles.linkinRegister}
                onPress={() => navigation.navigate('Create')}>
                    Registre-se
                </Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}