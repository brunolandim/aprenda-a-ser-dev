// Importando o módulo express
import express from 'express';

// Criando uma instância do express
const app = express();

// Definindo a porta em que o servidor vai rodar
const PORT = 3000;

// Middleware para parsear o corpo das requisições em JSON
// Isso permite que o servidor entenda dados enviados no formato JSON
app.use(express.json());

// As rotas são acessadas via http://localhost:3000/

// Rota básica para testar se o servidor está funcionando
// Acesse http://localhost:3000/ no navegador ou usando uma ferramenta como Postman/Insomnia
app.get('/', (req, res) => {
  res.send('Servidor está rodando! 🚀');
});

// Rota de teste para exemplificar como criar uma rota
// Acesse http://localhost:3000/teste para ver a resposta
app.get('/teste', (req, res) => {
  res.json({
    mensagem: 'Esta é uma rota de teste! Agora crie sua própria rota. 😊',
    status: 'Sucesso',
    codigo: 200,
    instrucao: 'Experimente criar uma nova rota em /minha-rota e retorne algo criativo!'
  });
});

// Iniciando o servidor e escutando na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🎉`);
  console.log(`Acesse: http://localhost:${PORT}`);
});