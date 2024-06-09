import React from 'react';

const RulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="popin-rules w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative scroll-smooth">
        <h2 className="text-2xl font-bold mb-4">Règles du jeu Skull King</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          &times;
        </button>
        <div className="text-left space-y-4 overflow-y-auto max-h-96 pr-4">
          <p>But du jeu : Marquez le plus de points en prédisant les plis que vous allez gagner.</p>
          <p>Déroulement du jeu :</p>
          <ul className="list-disc pl-6">
            <li>Le jeu se joue en 10 manches.</li>
            <li>À chaque manche, les joueurs reçoivent un nombre de cartes correspondant au numéro de la manche.</li>
            <li>Avant de jouer, chaque joueur prédit le nombre de plis qu'il pense gagner.</li>
            <li>Le joueur à gauche du donneur commence et joue une carte. Les autres doivent suivre la couleur si possible.</li>
            <li>Les cartes spéciales comme les Pirates, la Sirène, le Kraken et le Skull King ont des effets uniques.</li>
          </ul>
          <p>Marquer des points :</p>
          <ul className="list-disc pl-6">
            <li>20 points par pli correctement prédit.</li>
            <li>-10 points pour chaque différence entre la prédiction et les plis réellement remportés.</li>
            <li>Bonus spécial pour prédire zéro et réussir, ou capturer le Skull King.</li>
          </ul>
          <p>Cartes et Bonus spécial :</p>
          <ul className="list-disc pl-6">
            <li>Prédiction zéro : Réussir à ne pas remporter de plis rapporte des points bonus croissants (10 points pour la première manche, 20 points pour la deuxième, etc.).</li>
            <li>Capture du Skull King : Capturer le Skull King rapporte 40 points bonus avec la Sirène</li>
            <li>Capture de la Sirène : Capturer de la Sirène rapporte 20 points bonus avec le Pirate</li>
            <li>Capture du Pirate : Capturer du Pirate rapporte 30 points bonus avec le Pirate</li>
            <li>Karen : Le pli est jeté et le joueur de gauche commence le prochain pli.</li>
            <li>Baleine : Le plus haut chiffre gagne. Les couleurs et cartes spécial sont annulé</li>
            <li>Fuite : Perdez face à toutes les autres cartes.</li>
            <li>Tigresse : Fuite ou Pirate à vous de choisir.</li>
            <li>Couleur Noir : Le noir bat toutes les couleurs mais pas les cartes spéciales.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
