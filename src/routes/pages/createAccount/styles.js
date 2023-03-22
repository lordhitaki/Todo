import { StyleSheet, 
         } from "react-native";

const styles = StyleSheet.create({
    tela:{
        backgroundColor:"#121212",
        width:"100%",
        height:"100%",
        
   },
   boxIcon:{
    paddingTop:"5%",
    paddingLeft:"5%",    
},
boxTextLogin:{
    paddingTop:"5%",
    paddingLeft:"5%"
},
textLogin:{
    color:"#ffffff",
    fontSize:32,
    fontWeight:"700",
    lineHeight:38,
},
boxinputs:{
    paddingTop:"8%",
    paddingLeft:"5%",
},
inputs:{
    backgroundColor:"#1d1d1d",
    borderWidth:2,
    borderColor:"#242424",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"6%",
    width:"90%",
    height:"12%",
    color:"#ffffff",
    paddingHorizontal:20,
    borderRadius:5
},
textInputs:{
    color:"#ffffff",
    fontSize:18,
    fontWeight:"400",
    marginBottom:"5%",
},

buttonLogin:{
    marginLeft:"7%",
    backgroundColor:"#8875FF",
    width:"86%",
    height: 48,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:4,
    marginTop:"-30%",
},
textLogin2:{
    fontWeight:"400",
    fontSize:18,
    color:"#ffffff",
    textTransform:"uppercase"
},
linhaVertical: {
    marginTop:"-10%",
    flexDirection: 'row',
    alignItems: 'center'
},
linhaVertical2:{
    flex: 1,
    height: 1,
    backgroundColor:"#979797"
},
linhaVertical3:{
    flex: 1,
    height: 1,
    backgroundColor: '#979797'
},
textVertical:{
    fontSize:16,
    width: 50,
    textAlign:'center',
    color:"#979797",
    fontWeight:"400"
},
boxGoogle:{
    paddingTop:"9%"
},
buttonGoogle:{
    flexDirection:"row",
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
textGoogle:{
    color:"#ffffff",
    paddingLeft:"5%",
    alignItems:"center"
},
boxApple:{
    paddingTop:"9%"
},
buttonApple:{
    flexDirection:"row",
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
boxScroll:{
    height:"60%"
},
})

export default styles