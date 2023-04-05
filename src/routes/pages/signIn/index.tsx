import { NativeBaseProvider } from "native-base";
import { VStack, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from 'expo-google-app-auth';


import { Inputs } from "../../../Componets/inputs";
import { Buttons } from "../../../Componets/button";

type FormDataProps = {
  name: string;
  password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, " A senha deve ter no minimo 6 digitos"),
});

export default function SignIn() {

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: 'SEU_ANDROID_CLIENT_ID',
        iosClientId: 'SEU_IOS_CLIENT_ID',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        // Login bem sucedido, retorna o token de acesso do Google
        return result.accessToken;
      } else {
        // Login cancelado ou falhado
        return { cancelled: true };
      }
    } catch (e) {
      console.log('Erro ao autenticar com o Google:', e);
      return { error: true };
    }
  }
  


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data);
    navigation.navigate("HomeScreen");
  }

  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <VStack bgColor="#121212" flex={1} px={10}>
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
          marginBottom="50"
        >
          Login
        </Heading>
        <Heading fontSize={16} color="#fff" marginBottom="2" fontWeight="bold">
          Usuario
        </Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Inputs
              placeholder="Digite seu nome de usuario"
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
              placeholder="Digite sua senha"
              value={value}
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Buttons
          title="Acessar"
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
              onPress={signInWithGoogleAsync}
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
                    Não tem uma conta?
                </Text>
                <Text
                style={styles.linkinRegister}
                onPress={() => navigation.navigate('Create')}>
                    Registre-se
                </Text>
            </View>
          </View>
        </View>
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  boxIcon: {
    marginTop: 40,
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
    paddingTop:"15%",
},
textRegister:{
    color:"#979797",
    paddingRight:"2%"
},
linkinRegister:{
    color:"#ffffff"
},
});
