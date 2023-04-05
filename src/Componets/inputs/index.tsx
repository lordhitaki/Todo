import React from "react"
import { Input, IInputProps, FormControl } from "native-base"

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Inputs({ errorMessage = null, isInvalid, ...rest }: Props){
    const invalid = !!errorMessage || isInvalid;
    return(
    <FormControl
    mb={8} 
    isInvalid={invalid} >
        <Input
        bg="#1d1d1d"
        fontSize="md"
        h={10}
        isInvalid={invalid}
        placeholderTextColor="#fff"
        color="#fff"
        _focus={{
            bg:"#1d1d1d",
            borderWidth: 1,
            borderColor:"#fff",
          }}
        _invalid={{
            borderWidth:2,
            borderColor:"red.500",
            marginTop: 0
        }}

        {...rest}

        />
        <FormControl.ErrorMessage>
            {errorMessage}
        </FormControl.ErrorMessage>
    </FormControl>
    );
}