import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Calendario from '../Componets/Tab/calendario';
import Focus from '../Componets/Tab/focuse';
import Inicio from '../Componets/Tab/inicio';
import Perfil from '../Componets/Tab/perfil';
import ButtonNew from '../Componets/Tab/novo';
import { NovoModal } from '../Componets/modal';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#363636',
        tabBarActiveBackgroundColor: ' #363636',
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: { borderWidth: 2 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              color={color}
              size={size}
            />
          ),

        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="calendar"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={ButtonNew}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              width: 64,
              height: 64,
              backgroundColor: '#8687E7',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 35,
            }}
            >
              <Icon
                name="plus"
                size={14}
                style={{
                  width: 12,
                  height: 12,
                  color: '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Focus"
        component={Focus}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="clock-o"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="user-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
