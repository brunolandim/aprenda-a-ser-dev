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

// 🚀 Assim que o HTML carregar, a listagem de produtos será inserida diretamente na `<div id="produtos">`
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:3000/produtos");
    const data = await response.json();

    if (data.status === "Sucesso") {
      const produtosContainer = document.getElementById("produtos");
      produtosContainer.innerHTML = ""; // Limpa a div antes de adicionar os produtos

      data.data.forEach((produto, index) => {
        const produtoElemento = document.createElement("div");
        produtoElemento.classList.add("produto");
        produtoElemento.innerHTML = `
          <strong>${produto.nome}</strong>
          <p>${produto.descricao}</p>
          <button onclick="removerProduto(${index})">🗑 Remover</button>
        `;
        produtosContainer.appendChild(produtoElemento);
      });
    } else {
      alert("❌ Erro ao carregar produtos!");
    }
  } catch (error) {
    alert("❌ Erro ao conectar com o servidor!");
    console.error(error);
  }
});

// Função para adicionar um novo produto
function adicionarProduto() {
//sempre que criar um novo produto adicione o mesmo dentro da  <div id="produtos"></div>
}

// Função para atualizar a lista de produtos na tela
function atualizarLista() {
}

// Função para remover um produto pelo índice
function removerProduto(index) {
  alert("🗑️ Opa! Parece que você quer remover um produto... Mas essa funcionalidade ainda precisa ser implementada! 🚀");
  // Sempre que remover um novo produto, remova também da `<div id="produtos"></div>`
}
