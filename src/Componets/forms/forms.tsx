import { NativeBaseProvider } from "native-base";
import { VStack, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native'

import { Inputs } from "../inputs";
import { Buttons } from "../button";

type FormDataProps = {
    name: string;
    password: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    password: yup.string().required('Informe a senha').min(6,' A senha deve ter no minimo 6 digitos'),
})

export default function Forms(){
  const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors} } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    function handleSignUp(data: FormDataProps){
        console.log(data)
    }

    return(
    <VStack bgColor="#121212" flex={1}
    px={10}>
        <Center>
       
            <Heading 
            my={78} 
            color='#fff'
            marginRight="270"
            marginBottom="110"
            >
                Login
            </Heading>

            <Controller
            control={control}
            name="name"
            render={({ field: { onChange}}) => (
            <Inputs 
            placeholder="Nome" 
            onChangeText={onChange}
            errorMessage={errors.name?.message}
            />
            )}
            />
            <Controller
            control={control}
            name="password"
            render={({ field: { onChange}}) => (
            <Inputs 
            placeholder="Senha" 
            secureTextEntry
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            />
            )}
            />

            <Buttons title="Login" onPress={handleSubmit(handleSignUp)}/>
        </Center>
    </VStack>
    )
}
