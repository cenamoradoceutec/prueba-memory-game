import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { GameProvider } from './src/context/GameContext';

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GameProvider>
  );
}
