// Importando o módulo express
import express from 'express';

// Criando uma instância do express
const app = express();

// Definindo a porta em que o servidor vai rodar
const PORT = 3000;

// Middleware para parsear o corpo das requisições em JSON
app.use(express.json());

// Rota básica para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});

// Rota de teste
app.get('/teste', (req, res) => {
  res.json({
    mensagem: 'Esta é uma rota de teste!',
    status: 'Sucesso',
    codigo: 200
  });
});

// Iniciando o servidor e escutando na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});