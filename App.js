import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function App() {
  const [trails, setTrails] = useState([]);
  const [newTrail, setNewTrail] = useState({ name: '', length: '', difficulty: '' });

  useEffect(() => {
    // Retrieve trails in Austin, TX from a database or external API
    const trails = [
      { name: 'Barton Creek Greenbelt', length: 7.9, difficulty: 'moderate' },
      { name: 'St. Edwards Park', length: 4.5, difficulty: 'easy' },
      { name: 'Mount Bonnell', length: 0.5, difficulty: 'easy' }
    ];
    setTrails(trails);
  }, []);

  const handleNameChange = (text) => {
    setNewTrail({ ...newTrail, name: text });
  };

  const handleLengthChange = (text) => {
    setNewTrail({ ...newTrail, length: text });
  };

  const handleDifficultyChange = (text) => {
    setNewTrail({ ...newTrail, difficulty: text });
  };

  const handleAddTrail = () => {
    setTrails([...trails, newTrail]);
    setNewTrail({ name: '', length: '', difficulty: '' });
  };

  const renderTrail = ({ item }) => (
    <View style={styles.trail}>
      <Text>{item.name}</Text>
      <Text>Length: {item.length} miles</Text>
      <Text>Difficulty: {item.difficulty}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Austin Hiking App</Text>
      <FlatList
        data={trails}
        renderItem={renderTrail}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.subtitle}>Add a New Trail</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={newTrail.name}
        placeholder="Trail Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleLengthChange}
        value={newTrail.length}
        placeholder="Trail Length"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleDifficultyChange}
        value={newTrail.difficulty}
        placeholder="Trail Difficulty"
      />
      <Button title="Add Trail" onPress={handleAddTrail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    color: 'white',
  },
  trail: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    margin: 8,
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
});
