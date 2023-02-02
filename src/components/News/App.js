import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  View
} from 'react-native';
import NewsCard from './';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';


function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headers} >
      <Text style={styles.headerText}>News</Text>
      </View>
     
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    fontStyle:'italic'

  },
  headers:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e6e6fa',
    marginTop:20

  },
});

export default App;