import { screen, render } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '../frontend/index.js';

describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="produto-form">
                <input id="nome" type="text" placeholder="Nome do Produto">
                <input id="preco" type="number" placeholder="Preço">
                <button type="submit">Cadastrar</button>
            </form>
        `;
    });

    it('Deve exibir os campos de entrada e o botão de envio', () => {
        expect(screen.getByPlaceholderText('Nome do Produto')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Preço')).toBeInTheDocument();
        expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    });
});
