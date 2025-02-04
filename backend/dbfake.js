// Banco de dados fake simulando uma lista de produtos 📦
// Como este é um banco de dados em memória (array), precisamos gerenciar os IDs manualmente.
// 🛠️ Dica: Para adicionar um novo item, utilize `products.length + 1` como ID único. 
// Em bancos de dados reais, essa gestão de IDs é automática (ex: Auto Increment no SQL ou ObjectId no MongoDB).

export const products = [
  { id: 1, nome: "Notebook", descricao: "Notebook potente para programar e trabalhar com eficiência." },
  { id: 2, nome: "Mouse", descricao: "Mouse sem fio ergonômico para maior conforto no uso diário." },
  { id: 3, nome: "Teclado Mecânico", descricao: "Teclado mecânico RGB com switches responsivos para uma digitação precisa." },
];
