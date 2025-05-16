import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { GameContext } from '../context/GameContext';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { gamesPlayed } = useContext(GameContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Partidas jugadas: {gamesPlayed}</Text>
      <Button title="Iniciar" onPress={() => navigation.navigate('Game')} />
    </View>
  );
}
