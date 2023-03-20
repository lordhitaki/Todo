import React from "react"
import {View,
        Text, 
        TouchableOpacity, 
        } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Welcome(){
    const navigation = useNavigation();

    return(
    <View style={styles.tela}>
        <View style={styles.boxIcon}>
            <TouchableOpacity>        
            <Icon name="arrow-left" size={20} color="#fff"
            onPress={() => navigation.navigate('Index1')} />
            </TouchableOpacity>
        </View>
        <Animatable.View animation="fadeInUp" style={styles.boxText}>
            <Text style={styles.text}>
                Welcome to UpTodo
            </Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.boxText2}>
            <Text style={styles.text2}>
                Please login to your account or create new account to continue
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
                        Create account
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}