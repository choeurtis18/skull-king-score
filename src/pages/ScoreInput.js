import React, { useState } from 'react';

const ScoreInput = ({ players, addScores }) => {
  const [scores, setScores] = useState(Array(players.length).fill(''));
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (idx, value) => {
    // Vérifier que la valeur est un nombre entier valide
    if (value === '' || (/^-?\d+$/.test(value) && Number(value) >= -500 && Number(value) <= 500)) {
      const newScores = [...scores];
      newScores[idx] = value;
      setScores(newScores);
      setErrorMessage('');  // Effacer le message d'erreur si l'utilisateur entre une valeur valide
    }
  };

  const handleSubmit = () => {
    // Vérifier si tous les champs sont remplis avec des valeurs valides
    const isSubmitDisabled = scores.some(score => score === '' || isNaN(Number(score)) || Number(score) < -500 || Number(score) > 500);

    if (isSubmitDisabled) {
      setErrorMessage('Enregistrer le score de tous les joueurs');
    } else {
      const numericScores = scores.map(score => Number(score));
      addScores(numericScores);
      setScores(Array(players.length).fill(''));
      setErrorMessage('');  // Effacer le message d'erreur après une soumission réussie
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Entrer les scores pour ce tour</h2>
      {players.map((player, idx) => (
        <div key={idx} className="mb-2">
          <label className="mr-2 text-xl">{player.name}:</label>
          <input
            type="number"
            className="border p-2"
            value={scores[idx]}
            placeholder="Score"
            onChange={(e) => handleInputChange(idx, e.target.value)}
            min="-500"
            max="500"
            step="1"
            onKeyDown={(e) => {
              if (e.key === '.' || e.key === ',') {
                e.preventDefault(); 
              }
            }}
          />
        </div>
      ))}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button onClick={handleSubmit} className="px-4 py-2">
        Enregistrer les scores
      </button>
    </div>
  );
};

export default ScoreInput;
