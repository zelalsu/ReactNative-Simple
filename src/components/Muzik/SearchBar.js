import React, { useState } from 'react'
import { FlatList, TextInput, View, Text, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
import music from './music.json'
import SongCard from './SongCard'


function SearchBar() {
  const [list, setList] = useState(music)
  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeparator = () => <View style={styles.renderSeparator}></View>
  const handleSearch = text => {

    const filteredList = music.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;


    });
    setList(filteredList);
  };


  return (
    <SafeAreaView style={styles.container} >
      <TextInput style={styles.input} placeholder="ara.." onChangeText={handleSearch} />

      <View style={styles.container} >
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}//oge ayırıcı bileşen
        >
        </FlatList>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  input: {
    backgroundColor: "#e6e6fa",
    padding: 10,
    margin: 20,
    borderRadius: 6,

  },
  container: {
    flex: 1
  },
  renderSeparator: {
    borderWidth: 1,
    borderColor: "gray"
  }

})


export default SearchBar;