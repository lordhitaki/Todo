import React, {useState} from "react"
import {View,
        Text, 
        TouchableOpacity,
        Image 
        } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
    {
        key: "1",
        title:"Gerencie suas tarefas",
        text:"Você pode gerenciar facilmente todas as suas tarefas diárias no DoMe gratuitamente",
        image: require('../../../../Componets/Img/group.png')
    },
    {
        key: "2",
        title:"Crie sua rotina diá ria",
        text:"No UpTodo você pode criar sua rotina personalizada para se manter produtivo",
        image: require('../../../../Componets/Img/frame.png')
    },
    {
        key: "3",
        title:"Organize suas tarefas",
        text:"Você pode organizar suas tarefas diárias adicionando suas tarefas em categorias separadas",
        image: require('../../../../Componets/Img/fra.png')
    },
];

export default function Index1(){
    const [showHome, setShowHome] = useState(false);
    const navigation = useNavigation();

    function renderSlides({ item }){
        return(
        <View style={styles.tela}>
                <View style={styles.boxIcon} >
                <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}>        
                    <Text style={styles.textSkip}>
                        SKIP
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.boxLogo}>
                <Image 
                source={item.image}
                />
                </View>
                <View style={styles.boxCenter}>
                <Text style={styles.textCenter}>
                    {item.title}
                </Text>
                </View>
                <View style={styles.boxText}>
                <Text style={styles.text}>
                    {item.text}
                </Text>
                </View>
    </View>
        )
    }

    if(showHome){
        return(
            Welcome()
        )
    }else{
    return(
        <AppIntroSlider 
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                backgroundColor:"#ffffff",
                width:30,
                marginBottom:"220%",
            }}
            dotStyle={{
                backgroundColor:"#AFAFAF",
                marginBottom:"220%",
                
            }}
            renderNextButton={() => <View style={styles.boxNext}>
                                    <Text style={styles.textButtonNext}> Próximo</Text>
                                    </View> }
            renderDoneButton={() => <View style={styles.boxNext}>
                                    <Text style={styles.textButtonNext}> Acessar</Text>
                                    </View>}
            onDone={ () => navigation.navigate('Welcome') }
        />
    
    )}
}