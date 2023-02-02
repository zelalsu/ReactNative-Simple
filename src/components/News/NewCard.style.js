import { Dimensions, StyleSheet } from "react-native";

// bu componenti çağırdığında bana varsayılan olarak sadece bunu geri döndür demek.
export default StyleSheet.create({
container:
{
    backgroundColor:'white',
    margin:10,
    borderRadius:10,
    borderWidth:1

},
image:{
    height:Dimensions.get('window').height/4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

},
title:{
    fontWeight: 'bold',
    fontSize: 18,

},
description:{
    marginTop: 3,
},
author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  inner_container: {
    padding: 5,
  },
})

