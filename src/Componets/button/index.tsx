import { Button, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
    title: string;
}
export function Buttons({ title, ...rest}:  Props){
    return(
        <Button
          w="full"
          h={12}
          bg="#8687E7"
          marginBottom="7"
          _pressed={{
            bgColor:"fuchsia.600"
        }}
        {...rest}
        >
            <Text 
              color="white" 
              fontSize="md" >
              {title}
            </Text>
            
        </Button>
    );
}