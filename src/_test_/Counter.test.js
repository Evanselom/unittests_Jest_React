// Counter.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "../../components/Counter";

test("Affichage initial du compteur et incrémentation", async () => {
    render(<Counter />);

    // Vérifie que le compteur commence à 0
    expect(screen.getByText("Compteur : 0")).toBeInTheDocument();
});

test("Incrémentation de la valeur de compteur après un click", async () => {
    render(<Counter />);
    // Clique sur le bouton pour incrémenter
    const button = screen.getByRole("button", { name: "Incrémenter" });
    await userEvent.click(button);

    // Vérifie que le compteur est mis à jour
    expect(screen.getByText("Compteur : 1")).toBeInTheDocument();
})
