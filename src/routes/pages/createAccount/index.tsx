import { NativeBaseProvider } from "native-base";
import { VStack, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, StyleSheet, Keyboard, Text, Image, TouchableWithoutFeedback } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Inputs } from "../../../Componets/inputs";
import { Buttons } from "../../../Componets/button";

type FormDataProps = {
  name: string;
  password: string;
  passwordConfirm: string
};

const signUpSchema = yup.object({
  name: 
    yup.string()
    .required("Informe o nome"),
  password:
    yup.string()
    .required("Informe a senha")
    .min(6, " A senha deve ter no minimo 6 digitos"),
    password1: 
    yup.string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password'), null], 'As senhas não conferem.')

});

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data);
    alert("Conta criada com sucesso.")
    navigation.navigate("HomeScreen");
  }

  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback
        touchSoundDisabled
        onPress={() => Keyboard.dismiss()}
      >
      <VStack bgColor="#121212" flex={1} px={8}  >
        <Heading style={styles.boxIcon}>
          <TouchableOpacity>
            <Icon
              name="arrow-left"
              size={20}
              color="#fff"
              onPress={() => navigation.navigate("Welcome")}
            />
          </TouchableOpacity>
        </Heading>
        <Heading
          my={78}
          color="#fff"
          fontSize={36}
          fontWeight="bold"
          marginTop="30"
        >
          Crie sua conta
        </Heading>
        <Heading fontSize={16} color="#fff" marginBottom="2" fontWeight="bold" marginTop="-10">
          Usuario
        </Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Inputs
              placeholder="Crie seu nome de usuario"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Heading color="#fff" fontSize={16} marginBottom="2" fontWeight="bold">
          Senha
        </Heading>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Inputs
              placeholder="Crie sua senha"
              value={value}
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Heading color="#fff" fontSize={16} marginBottom="2" fontWeight="bold">
          Confirme sua senha
        </Heading>
        <Controller
          control={control}
            name="password1"          
            render={({ field: { onChange, value } }) => (
            <Inputs
              placeholder="Digite novamente sua senha..."
              value={value}
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password1?.message}
            />
          )}
        />

        <Buttons
          title="Registre-ser"
          onPress={handleSubmit(handleSignUp)}
          marginTop="2"
        />
        <View style={styles.containerBottom}>
          <View style={styles.linhaVertical}>
            <View style={styles.linhaVertical2} />
            <View>
              <Text style={styles.textVertical}>Ou</Text>
            </View>
            <View style={styles.linhaVertical2} />
          </View>
          <View style={styles.boxGoogle}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              onPress={() => navigation.navigate("Welcome")}
            >
              <Image source={require("../../../Componets/Img/google.png")} />
              <Text style={styles.textGoogle}>Acessar com Google</Text>
            </TouchableOpacity>
            <View style={styles.boxButtonGoogle}>
            <TouchableOpacity
                style={styles.buttonApple}>
                    <Image source={require('../../../Componets/Img/apple.png')}/>
                    <Text style={styles.textApple}>
                        Acessar com Apple
                    </Text>
                </TouchableOpacity>
            </View>
          <View style={styles.boxRegister}>
                <Text style={styles.textRegister}>
                    Ja possui uma conta?
                </Text>
                <Text
                style={styles.linkinRegister}
                onPress={() => navigation.navigate('SignIn')}>
                    Acesse aqui!
                </Text>
            </View>
          </View>
        </View>
      </VStack>
    </TouchableWithoutFeedback>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  boxIcon: {
    marginTop: 30,
  },
  containerBottom: {
    flexDirection: "column",
  },
  linhaVertical: {
    paddingBottom: 250,
    flexDirection: "row",
    alignItems: "center",
  },
  linhaVertical2: {
    flex: 1,
    height: 1,
    backgroundColor: "#979797",
  },
  textVertical: {
    fontSize: 16,
    width: 50,
    textAlign: "center",
    color: "#979797",
    fontWeight: "400",
  },
  boxGoogle: {
    position: 'absolute',
    width: '100%',
    marginTop: 50,
  },
  boxButtonGoogle:{
    paddingTop: 25
  },
  buttonGoogle: {
    flexDirection: "row",
    backgroundColor: "#1d1d1d",
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#8875FF",
  },
  textGoogle: {
    color: "#ffffff",
    paddingLeft: "5%",
    alignItems: "center",
  },
  buttonApple:{
    flexDirection:"row",
    backgroundColor:"#1d1d1d",
    width:"100%",
    height: 48,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:4,
    borderWidth: 2,
    borderColor: '#8875FF'
},
textApple:{
    color:"#ffffff",
    paddingLeft:"5%",
    alignItems:"center"
  },
  boxRegister:{
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
    flexDirection:"row",
    paddingTop:"5%",
},
textRegister:{
    color:"#979797",
    paddingRight:"2%"
},
linkinRegister:{
    color:"#ffffff"
},
});
