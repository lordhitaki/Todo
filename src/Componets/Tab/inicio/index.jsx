import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Inicio() {
  const navigation = useNavigation();
  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <TouchableOpacity>
          <Icon
            name="bars"
            size={20}
            color="#fff"
            onPress={() => navigation.navigate('Inicio')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.textHome}>
          Inicio
        </Text>
        <Image source={require('../../Img/Ellipse.png')} />
      </View>
      <View style={styles.img}>
        <Image source={require('../../Img/Check.png')} />
      </View>
    </View>
  );
}
