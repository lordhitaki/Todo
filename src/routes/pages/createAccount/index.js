import React, {useState, }from "react"
import { View,
         Text,
         TouchableOpacity,
         TextInput,
         Image,
         TouchableWithoutFeedback,
         Keyboard,
         KeyboardAvoidingView,
         Platform,
         ScrollView,
         } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'
import userService from "../../../services/usuarioService";

export default function Create(){
    const navigation = useNavigation();

const [username, setUsername ] = useState(null)
const [password, setPassword] = useState(null)
const [password2, setPassword2] = useState(null)
const [errorUsername, setErrorUsername ] = useState(null)
const [errorPassword, setErrorPassword] = useState(null)
const [errorPassword2, setErrorPassword2] = useState(null)
const [isLoading, setLoading] = useState(false)

    const Registrar = () =>{
        let error = false
        if( username == null){
            setErrorUsername("Preencha o campo de usuario")
            error = true
        }
        if( password == null || password.length < 4){
            setErrorPassword("Preencha com uma senha valida")
            error = true
        }
        if( password2 == null || password2 === password){
            setErrorPassword2("Os campos precisam estar iguais")
            error = true
        }
       return !error
    }

    const Salvar = ()  => {
        if(Registrar){
            setLoading(true)
        let data = {
            usuario: username,
            senha: password
            }
        let response = userService.Cadaster(data)
        .then((response) => {
            setLoading(false)
            console.log(response.data)
        })
        .catch((error)=> {
            setLoading(false)
            console.log(error)
            console.log("Deu Erro")
        })
        }
            console.log("Cadastro feito com sucesso")
    } 



    return(
<TouchableWithoutFeedback
    touchSoundDisabled
    onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.tela}>
        <View style={styles.boxIcon} >
            <TouchableOpacity>        
                <Icon name="arrow-left" size={20} color="#fff"
                onPress={() => navigation.navigate('Welcome')} />
            </TouchableOpacity>
        </View>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.boxTextLogin}>
            <Text style={styles.textLogin}>
                Crie sua conta
            </Text>
        </Animatable.View>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.boxinputs}>
               <ScrollView style={styles.boxScroll}>
                <Text style={styles.textInputs}>Nome de usario</Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite aqui seu nome de usuario..." 
                    placeholderTextColor="#494949"
                    onChangeText={value => setUsername(value)}
                    value={username}
                    errorMessage={errorUsername}
                     />
                <Text style={styles.textInputs}>Senha</Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite aqui sua senha..." 
                    placeholderTextColor="#494949" 
                    secureTextEntry= {true}
                    onChangeText={value => setPassword(value)}
                    value={password}
                    errorMessage={errorPassword}
                    
                    />
                <Text style={styles.textInputs}>
                    Confirme sua senha
                </Text>
                    <TextInput 
                    style={styles.inputs} 
                    placeholder="Digite novamente sua senha..." 
                    placeholderTextColor="#494949"
                    secureTextEntry= {true} 
                    onChangeText={value => setPassword2(value)}
                    value={password2}
                    errorMessage={errorPassword2}
                    />
               </ScrollView>
            </Animatable.View>
            <View>
            </View>
            <Animatable.View style={styles.boxLogin}>
                { isLoading &&
                <Text style={styles.textLogin}>Carregando...</Text>}
                { !isLoading &&
                <TouchableOpacity style={styles.buttonLogin}
                onPress={() => Salvar()}>
                    <Text style={styles.textLogin2}>
                        Registrar
                    </Text>
                </TouchableOpacity>
                }
            </Animatable.View>
            <View style={styles.linhaVertical}>
            <View style={styles.linhaVertical2} />
            <View>
                <Text style={styles.textVertical}>Ou</Text>
            </View>
            <View style={styles.linhaVertical3} />
            </View>
            <View style={styles.boxGoogle}>
                <TouchableOpacity
                style={styles.buttonGoogle}>
                    <Image source={require('../../../Componets/Img/google.png')}/>
                    <Text style={styles.textGoogle}>
                        Registrar com Google
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxApple}>
                <TouchableOpacity
                style={styles.buttonApple}
                onPress={() => register()}>
                    <Image source={require('../../../Componets/Img/apple.png')}/>
                    <Text style={styles.textApple}>
                        Registrar com Apple
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxRegister}>
                <Text style={styles.textRegister}>
                    ja tem uma conta?
                </Text>
                <Text
                style={styles.linkinRegister}
                onPress={() => navigation.navigate('SignIn')}>
                    Login
                </Text>
            </View>
    </KeyboardAvoidingView>
</TouchableWithoutFeedback>
    )
}