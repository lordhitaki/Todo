import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Rotas from '../../../TabNavigator';
import styles from './style';

export default function HomeScreen() {
  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.tela}>
        <Rotas />
      </View>
    </TouchableWithoutFeedback>
  );
}
