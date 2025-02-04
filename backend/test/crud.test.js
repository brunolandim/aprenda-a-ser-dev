const request = require('supertest');
const server = require('../../backend/server');

describe('API CRUD de Produtos', () => {
    let produtoId;

    it('Deve criar um novo produto (POST /produtos)', async () => {
        const produto = { nome: 'Produto Teste', preco: 19.99 };
        const response = await request(server)
            .post('/produtos')
            .send(produto);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        produtoId = response.body.id;
    });

    it('Deve listar todos os produtos (GET /produtos)', async () => {
        const response = await request(server).get('/produtos');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('Deve atualizar um produto existente (PUT /produtos/:id)', async () => {
        const updateData = { nome: 'Produto Atualizado', preco: 25.99 };
        const response = await request(server)
            .put(`/produtos/${produtoId}`)
            .send(updateData);

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe(updateData.nome);
    });

    it('Deve deletar um produto (DELETE /produtos/:id)', async () => {
        const response = await request(server).delete(`/produtos/${produtoId}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Produto removido com sucesso');
    });
});
