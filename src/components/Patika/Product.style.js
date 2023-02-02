import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container:
    {
        backgroundColor:"#efefef",
        borderRadius: 10,
        padding:5,
        margin:10, 
        borderWidth:1,
        flex:1,  

    },
    body:{
         
        flex:1,
      
       
    },
    image: {
        
        height:Dimensions.get("window").height/4,
        borderRadius: 5,
        width: '100%',
        resizeMode: 'contain'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        

    },
    stock:{
        color:"red",
        textAlign: 'right',
    }
  
 
})