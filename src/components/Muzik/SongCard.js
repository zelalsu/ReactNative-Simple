import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './style';
// eğer (props ) deseydik props.song.title yapmamız gerekirdi.Eğer propstan gelen verilere direkt erişmek istiyorsal ({..}) içinde yazmalıyız.
const SongCard = ({ song }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: song.imageUrl }} />

            <View style={styles.inner_container}>
                <Text style={styles.title} >{song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text>{song.artist}</Text>
                        <Text style={styles.year}>{song.year}</Text>
                    </View>
                    {song.isSoldOut &&(
                        <View style={styles.stock_container}>
                            <Text style={styles.stock}>TÜKENDİ</Text>
                        </View>
                    )}

                </View>



            </View>


        </View>
    )
}
export default SongCard;