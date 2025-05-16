import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GameStats from '../components/GameStats';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GameStats />
      <Button title="Iniciar" onPress={() => navigation.navigate('Juego')} />
    </View>
  );
}
