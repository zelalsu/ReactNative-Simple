import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:
    {
        padding: 10,
        flex:1,
        flexDirection: 'row'
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 70
    },
    inner_container: {
        padding:15,
        justifyContent:"center",
        flex:1//içinde bulunduğu yerde kaplayabildiği kadar yer kaplar


    },
    info_container:{
        flexDirection: 'row',
        flex:1
       
    },

    title: {
        fontWeight: 'bold',
        fontSize: 27,


    },
    year:{
        marginLeft:10,
        color:'gray'
    },
    stock: {
        color: "red",
       
        flex:1

    },
    content_container:{
        flexDirection:"row"
    },

    stock_container:{
      borderWidth:1,
      borderColor:"red",
      padding:3
    }


})