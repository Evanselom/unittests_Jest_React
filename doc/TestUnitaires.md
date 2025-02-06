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