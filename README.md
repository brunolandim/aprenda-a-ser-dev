# aprenda-a-ser-dev

## Crie um clone do projeto em sua máquina

```sh
git clone git@github.com:brunolandim/aprenda-a-ser-dev.git
```

## Descrição

Este projeto guia iniciantes do básico ao avançado em desenvolvimento web, construindo um sistema completo com frontend e backend.

## Estrutura do Projeto

```
fullstack-learning/
│── frontend/
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── index.js
│   │   ├── test/
│── backend/
│   ├── server.js
│   ├── package.json
│   ├── test/
│── tests/
│   ├── frontend/
│   ├── backend/
│── README.md
```

## Requisitos e Funcionalidades

### **Módulo 1: HTML e CSS**

- Criar estrutura HTML com formulário de cadastro de produto.
- Estilizar utilizando CSS puro.
- Responsividade com Flexbox/Grid.(jogue o jogo https://flexboxfroggy.com/ para ter uma noção a mais de diplay flex )
- jogue o jogo https://flexboxfroggy.com/ para ter uma noção a mais de diplay flex (opcional)
- jogue o jogo https://cssgridgarden.com/ para ter uma noção a mais de diplay grid (opcional)

### **Módulo 2: JavaScript**

- Manipulação do DOM.
- Validação de formulários.
- Armazenamento em localStorage.

### **Módulo 3: Frontend Dinâmico**

- Simular API com dados mockados.
- Criar um modal de exibição.
- Implementar sistema de login mockado.

### **Módulo 4: Backend com Node.js**

- Criar um servidor básico utilizando Node.js.
- Executar o comando npm init para criar o arquivo package.json(esse arquivo é necessário para instalar as dependências necessárias para o servidor rodar)
- Para rodar o servidor voce pode rodar o comando node server.js mas quero que coloque esse comando no package dentro de scripts ele deve rodar usando um comando como npm run dev(esse é um desafio)
- Implementar funcionalidades diretamente no `server.js`.

### **Módulo 5: Integração Frontend e Backend**

- Consumir API real.
- Criar sistema CRUD.

### **Módulo 6: Deploy e Finalização**

- Hospedar frontend e backend.
- Criar documentação.

## Configuração do Projeto

## Você pode rodar os testes do projeto e instalar as dependências de forma separada ou fazer tudo isso de uma vez se estiver no diretório correto caso queira rodar algo específico sempre acesse a pasta e use os packages.json como base para saber quais scripts rodar

### **Instalar dependências**

```sh
npm run installAllDependencies
```

### **Rodar o projeto**

```sh
cd backend && npm run dev
cd frontend && npm run dev
```

## Testes Unitários

Os testes são escritos com Jest para o backend e Testing Library para o frontend.

### **Rodar testes**

```sh
npm run test
```

### **Rodar testes separadamente**

```sh
cd frontend && npm test
cd backend && npm test
```

## Como Contribuir 💡

Caso queira contribuir, faça um **fork** do projeto e me ajude a melhorá-lo!  

1. Faça um fork do repositório clicando no botão **Fork** no GitHub.
2. Clone o seu fork para a sua máquina local:

```sh
git clone git@github.com:SEU-USUARIO/aprenda-a-ser-dev.git
git checkout -b minha-melhoria
git commit -m "Melhoria implementada"
git push origin minha-melhoria
```
 


