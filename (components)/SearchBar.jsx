import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchbar}
          placeholder='Search your notes'
        />
        <Feather name="search" size={24} style={styles.searchIcon} />
      </View>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10
  },
  searchbar: {
    fontSize: 20,
    padding: 5,
    flex: 1, 
    marginRight: 10
  },
  searchIcon: {
    color: 'black', 
  }
});
