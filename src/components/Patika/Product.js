import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './Product.style'
const NewPatika = ({ news }) => {
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: news.imgURL }} />
            <View style={styles.body}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.price}>{news.price}</Text>
                <Text style={styles.stock}>{news.inStock ? ' ' : 'STOK YOK'}</Text>
            </View>
        </View>

    )
}


export default NewPatika