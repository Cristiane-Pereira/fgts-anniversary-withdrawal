import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

// Import Component
import ButtonSubmit from "../ButtonSubmit";

describe("ButtonSubmit Component", () => {
  // Teste 1: Verifica se o botão renderiza corretamente com o texto inicial ao entrar na tela
  it("should render the button with the initial label text", () => {
    render(<ButtonSubmit label="Ver Proposta" />);

    // Verifica se o botão existe e tem o texto correto
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Ver Proposta");
  });

  // Teste 2: Verifica se o botão está habilitado quando a prop 'disabled' é false ao entrar na tela
  it("should be enabled when the 'disabled' prop is false", () => {
    render(<ButtonSubmit disabled={false} />);

    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });

  // Teste 3: Verifica se o botão não está no estado de loading ao entrar na tela (isLoading: false)
  it("should not show loading and be enabled when 'isLoading' is false", () => {
    render(<ButtonSubmit label="Ver Proposta" isLoading={false} disabled={false} />);

    const button = screen.getByRole("button");

    // Verifica que o texto inicial não é "Carregando..." e o botão está habilitado
    expect(button).toHaveTextContent("Ver Proposta");
    expect(button).toBeEnabled();
  });

  // Teste 4: Simula o clique e verifica se o botão entra no estado de loading e executa a função de submit
  it("should handle click, trigger loading state and call the onClick function", async () => {
    const handleSubmit = jest.fn();
    
    // Renderiza o botão no estado inicial, pronto para clique
    const { rerender } = render(
      <ButtonSubmit label="Ver Proposta" disabled={false} isLoading={false} onClick={handleSubmit} />
    );

    const button = screen.getByRole("button");

    // Simula o clique no botão
    await act(async () => {
      await userEvent.click(button);
    });

    // Verifica se a função handleSubmit foi chamada ao clicar
    expect(handleSubmit).toHaveBeenCalledTimes(1);

    // Simula a mudança de estado para loading após o clique
    rerender(
      <ButtonSubmit label="Carregando..." disabled={true} isLoading={true} onClick={handleSubmit} />
    );

    // Verifica se o botão entrou no estado de loading e está desabilitado
    expect(button).toHaveTextContent("Carregando...");
    expect(button).toBeDisabled();
  });
});
