import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#1d1d1d',
    flex: 1,
  },
  textHome: {
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#ffffff',
    paddingTop: 14,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 40,
  },
  icon: {
    right: 20,
  },
  img: {
    top: 150,
    left: 90,
  },

});

export default styles;
