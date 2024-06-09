import React, { useState } from 'react';

const PlayerInput = ({ addPlayer }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      addPlayer(name);
      setName('');
    }
  };

  return (
    <div className="mb-4 flex justify-center flex-col gap-4">
      <h1 className='text-2xl text-gold'>Ajouter un joueur</h1>
      <div>
        <input type="text" className="border p-2 mr-2" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Nom du joueur"/>
        <button onClick={handleAdd} className="px-4 py-2">Ajouter joueur</button>
      </div>
    </div>
  );
};

export default PlayerInput;
