import { StyleSheet, } from "react-native";

const styles = StyleSheet.create({
    tela:{
        flex:1,
        backgroundColor:"#1d1d1d",
        width:"100%",
        height:"100%",
    },
    boxLogo:{
      position:"relative",
      paddingTop:"8%",
      paddingLeft:"25%",
    },
    boxIcon:{
        paddingTop:"5%",
        paddingLeft:"5%",
        position:"relative"
    },
    textSkip:{
        color:"#ffffff",
        fontWeight:"400",
        fontSize:16,
        textTransform:"uppercase",
        lineHeight:24
    },
    boxCenter:{
        paddingTop:"30%"
    },
    textCenter:{
        fontWeight:"700",
        fontSize:32,
        lineHeight:38,
        color:"#ffffff",
        textAlign:"center"
    },
    boxText:{
        marginTop:"13%",
        width:"82%",
        marginLeft:"9%",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontWeight:"400",
        fontSize:16,
        textAlign:"center",
        color:"#ffffff"
    },
    boxNext:{
        marginLeft:"45%",
        justifyContent:"center",
        backgroundColor:"#8875FF",
        width:"50%",
        height:"150%",
        borderRadius:4,
    },
    boxBack:{
        justifyContent:"center",
        width:"30%",
        height:"35%",
        borderRadius:4
    },
    textButtonBack:{
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"400",
        fontSize:16,
        textTransform:"uppercase",
    },
    textButtonNext:{
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"400",
        fontSize:16,
        textTransform:"uppercase",
    },
})

export default styles