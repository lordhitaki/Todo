import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function ButtonNew() {
  const [modalAtiva, setModalAtiva] = useState(false);
  return (
    <View style={styles.tela}>
      <Modal
        visible={modalAtiva}
        transparent
        animationType="fade"
        onRequestClose={() => setModalAtiva(false)}
      >
        <View style={styles.outModal}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>Adicione sua tarefa</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Digite sua tarefa aqui..."
              placeholderTextColor="#ffffff"
            >
            </TextInput>
            <TextInput
              style={styles.inputsDes}
              placeholder="Descrição"
              placeholderTextColor="#ffffff"
            >
            </TextInput>
            <View style={styles.boxItens}>
              <Pressable onPress={() => setModalAtiva(false)}>
                <Icon
                  style={styles.fechar}
                  name="arrow-circle-right"
                  size={30}
                  color="#8687E7"
                />
              </Pressable>
              <Pressable onPress={() => setModalAtiva(false)}>
                <Icon
                  style={styles.clock}
                  name="clock-o"
                  size={30}
                  color="#fff"
                />
              </Pressable>
              <Pressable onPress={() => setModalAtiva(false)}>
                <Icon
                  style={styles.tag}
                  name="tag"
                  size={30}
                  color="#fff"
                />
              </Pressable>
              <Pressable onPress={() => setModalAtiva(false)}>
                <Icon
                  style={styles.bandeira}
                  name="flag"
                  size={30}
                  color="#fff"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.task}>
        <TouchableOpacity
          onPress={() => setModalAtiva(true)}
        >
          <Text
            style={styles.textButton}
          >
            Adicione sua Tarefa.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
