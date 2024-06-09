import React from 'react';

const ScoreTable = ({ players, scores }) => {
  const totalScores = players.map((player, idx) => {
    return scores.reduce((acc, score) => acc + (score[idx] || 0), 0);
  });

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2 text-xl">Joueur</th>
          <th className="border p-2 text-xl">Scores</th>
          <th className="border p-2 text-xl">Total</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, idx) => (
          <tr key={idx}>
            <td className="border p-2">{player.name}</td>
            <td className="border p-2">{scores.map((score, sIdx) => score[idx] || 0).join(', ')}</td>
            <td className="border p-2">{totalScores[idx]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
