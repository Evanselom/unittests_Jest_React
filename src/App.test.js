import { render, screen } from '@testing-library/react';
import App from './App';
import { Button } from '../components/Buttons';
import { calculerTVA, addition } from '../utils';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Le bouton affiche le texte correct', () => {
  render(<Button label="Cliquez-moi" />);
  expect(screen.getByText("Cliquez-moi")).toBeInTheDocument();
});


test("calculerTVA fonctionne correctement", () => {
  expect(calculerTVA(100, 20)).toBe(120);
});

test("addition fonctionne", () => {
  expect(addition(2, 3)).toBe(5); // Ce test va échouer !
});