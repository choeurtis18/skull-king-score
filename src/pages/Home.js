import React, { useState, useEffect } from 'react';
import PlayerInput from './PlayerInput';
import ScoreTable from './ScoreTable';
import ScoreInput from './ScoreInput';
import RulesModal from './RulesModal';

import logo from "../images/logo.png";
import header from "../images/header.png";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [scores, setScores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Charger les données depuis le localStorage au montage du composant
  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    setPlayers(savedPlayers);
    setScores(savedScores);
  }, []);

  // Sauvegarder les données dans le localStorage à chaque modification des joueurs ou des scores
  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [players, scores]);

  const addPlayer = (name) => {
    setPlayers([...players, { name, scores: [] }]);
  };

  const addScores = (newScores) => {
    setScores([...scores, newScores]);
  };

  const resetGame = () => {
    setPlayers([]);
    setScores([]);
    localStorage.removeItem('players');
    localStorage.removeItem('scores');
  };

  return (
    <div className="container mx-auto">
      <header className="text-center py-5 my-8 lg:flex lg:flex-row">
        <img src={header} alt="Skull King Logo" className="hidden lg:block mx-auto mb-8 h-100" />
        <div>
          <img src={logo} alt="Skull King Logo" className="mx-auto w-60 mb-8" />
          <div className="flex flex-col">
            <h1 className="text-nautical-chart text-7xl font-bold">Skull King</h1>
            <p className="text-gold text-3xl font-bold">Score Tracker</p>
          </div>
          <div className="flex flex-row gap-6 justify-center text-lg">
            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 mt-4 rounded-lg">Règles du jeu</button>
            <button onClick={resetGame} className="px-4 py-2 mt-4 rounded-lg">Nouvelle Partie</button>
          </div>
        </div>
        <img src={header} alt="Skull King Logo" className="hidden lg:block mx-auto mb-8 h-100" />
      </header>
      <div className="mx-4">
        <PlayerInput addPlayer={addPlayer} />
        <div className="partie-container">
          <ScoreInput players={players} addScores={addScores} />
          <ScoreTable players={players} scores={scores} />
        </div>
      </div>

      {/* Modal */}
      <RulesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
