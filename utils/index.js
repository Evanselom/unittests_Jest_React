export const addition = (a, b) => {
    return a - b; // Oups ! Erreur volontaire
  }

// Fonction à tester
export function calculerTVA(prixHT, taux) {
    return prixHT * (1 + taux / 100);
}