import { View, Text } from 'react-native'
import React from 'react'
import { SearchBar } from '../(components)/SearchBar'
import NotesList from '../(components)/NotesList'
import { useNavigation } from 'expo-router'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
    <SearchBar />
    <NotesList />
  </View>
  )
}

export default Home
