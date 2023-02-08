import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'
import data from './data.json'
import Product from './Product'


function App() {
    const renderItem = ({ item }) => <Product news={item} />

    return (
        <View>
            <Text style={styles.headerText} >PATİKASTORE</Text>
            <TextInput style={styles.input} placeholder="ara.." />
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
            >
            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 50,
        color: "purple",
        marginTop:30,
        textAlign: 'center',
       
 


    },
    input: {
        backgroundColor: "#e6e6fa",
        padding: 10,
        margin: 10,
        borderRadius: 6,

    }
})


export default App;