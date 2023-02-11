
import { TextInput, View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import style from './style';
const Separator = () => <View style={style.separator} />;
const ToDo = () => {

    const [note, setNote] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleSubmit = () => {
        setNote([...note, newNote]);//yeni gelen newnotu  dizine ekle
        setNewNote('');// eklendiği zaman boşalt demek
    }

    const longPress = () => {
        alert('Button Long Pressed');
    }
    return (
        <View>
            <View>
                {note.map((note, index) => (
                    <TouchableOpacity style={style.press}>
                        <Text onLongPress={longPress} style={style.notes} key={index}>{note}</Text>
                    </TouchableOpacity>

                ))}
            </View>
            <View style={style.input_container}>
                <TextInput
                    value={newNote}
                    onChangeText={setNewNote}
                    placeholder='Yapılacaklar' />
                <Separator />
                <Button style={style.save} color="#808080" onPress={handleSubmit} title="Kaydet" />


            </View>


        </View>

    )
}


export default ToDo;