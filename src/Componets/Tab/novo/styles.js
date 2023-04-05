import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
  },
  textNovo: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#ffffff',
    marginTop: '10%',
  },
  outModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  modalView: {
    justifyContent: 'center',
    height: 250,
    marginTop: 270,
    backgroundColor: '#363636',
    borderRadius: 30,
    padding: 22,
    width: '100%',
  },
  textModal: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    paddingBottom: 15,
  },
  boxItens: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginTop: 60,
  },
  fechar: {
    left: 180,
  },
  bandeira: {
    paddingRight: 30,
  },
  tag: {
    paddingRight: 30,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
    width: '90%',
    color: '#fff',
  },
  inputsDes: {
    borderColor: '#fff',
    paddingHorizontal: 10,
    width: '90%',
    marginTop: 13,
    color: '#fff',
  },
  task: {
    backgroundColor: '#8687E7',
    width: 150,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default styles;
