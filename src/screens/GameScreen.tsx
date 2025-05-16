import React, { useContext, useEffect, useState } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import { GameContext } from '../context/GameContext';

const generateCards = () => {
  const values = [1, 1, 2, 2, 3, 3, 4, 4];
  return values.sort(() => Math.random() - 0.5);
};

export default function GameScreen() {
  const { incrementGames, gamesPlayed } = useContext(GameContext);
  const [cards, setCards] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    setCards(generateCards());
    incrementGames();
  }, []);

  const handlePress = (index: number) => {
    if (selected.length === 2) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (cards[first] === cards[second]) {
        Alert.alert('¡Ganaste!', 'Se ha ganado el juego', [
          { text: 'Reiniciar', onPress: resetGame },
        ]);
      } else {
        Alert.alert('Fallaste', 'Cartas no son iguales', [
          { text: 'Reintentar', onPress: resetGame },
        ]);
      }
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setSelected([]);
    incrementGames();
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Partidas jugadas: {gamesPlayed}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 200 }}>
        {cards.map((value, index) => (
          <Button
            key={index}
            title={selected.includes(index) ? value.toString() : '?'}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
    </View>
  );
}
