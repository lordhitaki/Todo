import { StyleSheet, 
    
        } from "react-native";

const styles = StyleSheet.create({
   tela:{
        backgroundColor:"#1d1d1d",
        width:"100%",
        height:"100%",
   },
   boxIcon:{
     paddingTop:"5%",
     paddingLeft:"5%",
   },
   boxText:{
       paddingTop:"40%",
       alignItems:"center"
   },
   boxText2:{
        width:"80%",
        paddingTop:"10%",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:"10%"
   },
   text:{
        color:"#ffffff",
        fontSize:32,
        fontWeight:"700",
        lineHeight:38.4,
   },
   text2:{
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"400",
        fontSize:16,
   },
   boxLogin:{
        marginTop:"80%",
   },
   buttonLogin:{
        position:"relative",
        backgroundColor:"#8875FF",
        width:"85%",
        height: 48,
        alignItems:"center",
        marginLeft:"7%",
        justifyContent:"center",
        borderRadius:4
   },
   textLogin:{
        fontWeight:"400",
        fontSize:18,
        color:"#ffffff",
        textTransform:"uppercase"
   },
   boxLogin2:{
        position:"relative",
        paddingTop:"10%",
  },
   buttonLogin2:{
        backgroundColor:"#1d1d1d",
        width:"85%",
        height: 48,
        alignItems:"center",
        marginLeft:"7%",
        justifyContent:"center",
        borderRadius:4,
        borderWidth: 2,
        borderColor: '#8875FF'
        
   },
   textLogin2:{
        fontWeight:"400",
        fontSize:18,
        color:"#ffffff",
        textTransform:"uppercase"
   },
})

export default styles