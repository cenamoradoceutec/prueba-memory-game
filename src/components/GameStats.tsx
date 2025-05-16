import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameContext } from '../context/GameContext';

const GameStats = () => {
  const { gamesPlayed } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Partidas jugadas: {gamesPlayed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameStats;
