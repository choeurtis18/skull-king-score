import React, { useState } from 'react';

const ScoreInput = ({ players, addScores }) => {
  const [scores, setScores] = useState(Array(players.length).fill(''));

  const handleInputChange = (idx, value) => {
    const newScores = [...scores];
    newScores[idx] = Number(value);
    setScores(newScores);
  };

  const handleSubmit = () => {
    addScores(scores);
    setScores(Array(players.length).fill(''));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Entrer les scores pour ce tour</h2>
      {players.map((player, idx) => (
        <div key={idx} className="mb-2">
          <label className="mr-2 text-xl">{player.name}:</label>
          <input type="number" className="border p-2" value={scores[idx]} placeholder="Score"
            onChange={(e) => handleInputChange(idx, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit} className="px-4 py-2">Enregistrer les scores</button>
    </div>
  );
};

export default ScoreInput;
