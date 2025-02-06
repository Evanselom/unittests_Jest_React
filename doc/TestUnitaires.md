**1. Introduction à Jest et React Testing Library**

🎯 Pourquoi Jest et React Testing Library ?

Jest est un framework de test rapide et puissant, conçu pour JavaScript et utilisé par défaut avec React.

React Testing Library (RTL) permet de tester des composants React en simulant une interaction utilisateur réaliste.

✅ Avantages :

Tests rapides et indépendants.

Facilité d’intégration avec React.

Meilleure simulation du comportement réel des utilisateurs.

**2. Installation et configuration**

📌 Prérequis :

Avant de commencer, assure-toi d’avoir Node.js et un projet React configuré.

🛠 Installation :

Dans un projet React, installe Jest et React Testing Library avec :

npm install --save-dev jest @testing-library/react @testing-library/jest-dom

Dans package.json, ajoute ceci :

"scripts": {
  "test": "react-scripts test"
}

Pour lancer les tests :

npm test

**⚙️ Configuration avancée**

Pour éviter les erreurs de Jest liées aux modules ES6, ajoute un fichier jest.config.js :

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

Cela garantit que Jest est bien configuré pour un projet React moderne.

**Prendre la main avec un premier test simple**
Créer une fonction addition qui prend deux variables a et b et retourne leur somme

Ecrire une fonction pour vérifier que votre fonction est bien correcte
Ajouter un cas qui fait échouer le test


**Test du compteur**

🎯 Objectif : Tester un composant Counter avec un bouton qui incrémente un compteur.

🛠 Composant Counter

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}

**Structure des tests : Arrange, Act, Assert**

🛠 Méthodologie AAA (Arrange, Act, Assert)

Lors de l’écriture des tests, il est recommandé de suivre la structure AAA :

Arrange (Mise en place) : Préparer l’environnement du test.

Act (Action) : Exécuter l’action à tester.

Assert (Vérification) : Vérifier si le comportement attendu est respecté.

✨ Exemple de test avec AAA

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleButton } from './ToggleButton';

test('Le bouton change de texte après un clic', async () => {
  // ARRANGE : Mise en place
  render(<ToggleButton />);
  const button = screen.getByRole("button", { name: "OFF" });

  // ACT : Action à tester
  await userEvent.click(button);

  // ASSERT : Vérification du résultat
  expect(screen.getByRole("button", { name: "ON" })).toBeInTheDocument();
});

🎯 Pourquoi utiliser AAA ?

Améliore la lisibilité et la clarté des tests.

Facilite la maintenance du code de test.

Permet une meilleure compréhension du processus de test.