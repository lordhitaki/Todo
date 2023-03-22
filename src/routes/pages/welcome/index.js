import React from "react"
import {View,
        Text, 
        TouchableOpacity,
        TouchableWithoutFeedback,
        Keyboard 
        } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Welcome(){
    const navigation = useNavigation();

    return(
    <TouchableWithoutFeedback
    touchSoundDisabled
    onPress={() => Keyboard.dismiss()}>
    <View style={styles.tela}>
        <View style={styles.boxIcon}>
            <TouchableOpacity>        
            <Icon name="arrow-left" size={20} color="#fff"
            onPress={() => navigation.navigate('Index1')} />
            </TouchableOpacity>
        </View>
        <Animatable.View animation="fadeInUp" style={styles.boxText}>
            <Text style={styles.text}>
                Bem vindo ao UpTodo
            </Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.boxText2}>
            <Text style={styles.text2}>
                Faça login na sua conta ou crie uma nova conta para continuar
            </Text>
        </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.boxLogin}>
                <TouchableOpacity style={styles.buttonLogin}
                onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.textLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.boxLogin2}>
                <TouchableOpacity style={styles.buttonLogin2}
                onPress={() => navigation.navigate('Create')}>
                    <Text style={styles.textLogin2}>
                        Criar uma conta
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    </TouchableWithoutFeedback>
    )
}