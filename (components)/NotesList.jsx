import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Notes = [
  {
    id: 1,
    title: "Grocery Items",
    content: "1) Besan \n 2) Chana ...",
  },
  {
    id: 2,
    title: "Business Meet",
    content: "Meet Subramanian Sir tomorrow at ...",
  },
  {
    id: 3,
    title: "Project Presentation",
    content: "Conduct a meeting with team members ...",
  },
  {
    id: 4,
    title: "Project Presentation",
    content: "Conduct a meeting with team members ...",
  },
  {
    id: 5,
    title: "Project Presentation",
    content: "Conduct a meeting with team members ...",
  },
  {
    id: 6,
    title: "Project Presentation",
    content: "Conduct a meeting with team members ...",
  },
  {
    id: 7,
    title: "Project Presentation",
    content: "Conduct a meeting with team members ...",
  },
  {
    id: 8,
    title: "Project Presentation",
    content: "Conduct a meeting with team members ...",
  },
];

const NotesList = () => {
  return (
    <View style={styles.noteContainer}>
      <FlatList
        data={Notes}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: `/screen/${item.id}`
            }}
          >
              <View style={styles.noteItem}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteContent}>{item.content}</Text>
              </View>
          </Link>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    maxHeight: 490,
  },
  noteItem: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteContent: {
    marginTop: 5,
  },
});

export default NotesList;
