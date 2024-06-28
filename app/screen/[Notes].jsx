import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

const NotesList = [
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

const Page = () => {
  const { Notes } = useLocalSearchParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const note = NotesList.find(item => item.id === Number(Notes));
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [Notes]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
});

export default Page;
