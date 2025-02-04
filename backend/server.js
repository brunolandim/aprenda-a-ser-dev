// Importando o módulo express (nosso herói para criar servidores web)
import express from 'express';
import cors from 'cors'

// Criando uma instância do express (tipo ligar o motor do carro)
const app = express();

// Definindo a porta em que o servidor vai rodar (onde o nosso app vai escutar requisições)
const PORT = 3000;

// Middleware para entender JSON nas requisições (tipo um tradutor de JSON)
app.use(express.json());

// 🚀 Habilitando o CORS para permitir requisições de outros domínios
app.use(cors());

// 🚀 As rotas são acessadas via http://localhost:3000/

// O que são req e res? 🤔
// - req (request) é o que o cliente manda para o servidor. Pode ser um pedido de pizza, um formulário preenchido, etc.
// - res (response) é o que o servidor devolve para o cliente. Pode ser a pizza pronta, uma mensagem, dados, etc.

// Exemplo: Imagine que você vai a um restaurante:
// - Você (o cliente) faz um pedido para o garçom -> isso é a "request" (req)
// - O garçom anota o pedido e leva para a cozinha
// - O chef prepara a comida e o garçom traz para você -> isso é a "response" (res)

// Rota principal para testar se o servidor está vivo 🏥
// Acesse http://localhost:3000/ no navegador ou Postman
app.get('/', (req, res) => {
  res.send('🔥 Servidor está ON! Pode mandar ver! 🚀');
});

// Rota de teste só para brincar um pouco 🎉
// Acesse http://localhost:3000/teste para ver a mágica acontecer
app.get('/teste', (req, res) => {
  res.json({
    mensagem: '✨ Olá, você encontrou a rota secreta do aprendizado! 🔥',
    status: 'Sucesso',
    codigo: 200,
    desafio: 'Crie uma nova rota chamada /minha-rota e retorne algo divertido! 🤓'
  });
});

// Bora colocar esse servidor para rodar 🚗💨
app.listen(PORT, () => {
  console.log(`🎉 Servidor rodando na porta ${PORT}!`);
  console.log(`🔗 Acesse: http://localhost:${PORT}`);
});