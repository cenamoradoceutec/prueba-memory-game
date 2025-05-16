import React, { createContext, useState, ReactNode } from 'react';

interface GameContextType {
  gamesPlayed: number;
  incrementGames: () => void;
}

export const GameContext = createContext<GameContextType>({
  gamesPlayed: 0,
  incrementGames: () => {},
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const incrementGames = () => setGamesPlayed(prev => prev + 1);

  return (
    <GameContext.Provider value={{ gamesPlayed, incrementGames }}>
      {children}
    </GameContext.Provider>
  );
};
