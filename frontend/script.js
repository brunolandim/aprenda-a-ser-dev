// Função para chamar o endpoint de teste
// Acesse o backend abra outro terminar e rode o script npm run dev para subir o servidor
async function chamarTestEndpoint() {
  try {
    const response = await fetch("http://localhost:3000/teste");
    console.log(response)
    const data = await response.json();

    alert(`📡 Resposta do servidor:\n${JSON.stringify(data, null, 2)}`);
  } catch (error) {
    alert("❌ Erro ao chamar o endpoint de teste! o servidor esta de pé?");
    console.error(error);
  }
}

// Função para adicionar um novo produto
function adicionarProduto() {
//sempre que criar um novo produto adicione o mesmo dentro da  <div id="produtos"></div>
}

// Função para atualizar a lista de produtos na tela
function atualizarLista() {
}

// Função para remover um produto pelo índice
function removerProduto(index) {
  //sempre que remover um novo produto remova também da  <div id="produtos"></div>
}
