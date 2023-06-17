import React, { useState } from "react";
import music_data from './music-data.json';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MusicCard from "./components/MusicCard";
import SearchBar from "./components/SearchBar";

function App() {

  const renderSong = ({item}) => <MusicCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator}/>
  const [liste, setList] = useState(music_data)
  const handleSearch = text =>{
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  }

  return(
    <SafeAreaView>
      <SearchBar onSearch={handleSearch} />
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={liste}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  seperator :{
    borderWidth: 1,
    borderColor: '#eceff1',
  }

})