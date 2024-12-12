// LocalDB.js
let transactions = [];

export const addTransaction = (transaction) => {
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

export const getTransactions = () => {
  const storedTransactions = localStorage.getItem("transactions");
  return storedTransactions ? JSON.parse(storedTransactions) : [];
};

export const dados = [
    {
      codigo: 1,
      descricao: "Salário",
      entrada: 5000,
      saida: 0,
      total: 5000,
    },
    {
      codigo: 2,
      descricao: "Aluguel",
      entrada: 0,
      saida: 1500,
      total: -1500,
    },
    {
      codigo: 3,
      descricao: "Supermercado",
      entrada: 0,
      saida: 300,
      total: -300,
    },
    {
      codigo: 4,
      descricao: "Internet",
      entrada: 0,
      saida: 100,
      total: -100,
    },
    {
      codigo: 5,
      descricao: "Transporte",
      entrada: 0,
      saida: 150,
      total: -150,
    },
    {
      codigo: 6,
      descricao: "Venda de produto",
      entrada: 200,
      saida: 0,
      total: 200,
    },
    { codigo: 7, descricao: "Cinema", entrada: 0.0, saida: 50.0, total: -50.0 },
    {
      codigo: 8,
      descricao: "Manutenção do carro",
      entrada: 0,
      saida: 400,
      total: -400,
    },
    { codigo: 9, descricao: "Academia", entrada: 0.0, saida: 70.0, total: -70.0 },
    {
      codigo: 10,
      descricao: "Rendimento de investimentos",
      entrada: 300,
      saida: 0,
      total: 300,
    },
    {
      codigo: 11,
      descricao: "Gasolina",
      entrada: 0,
      saida: 200,
      total: -200,
    },
    {
      codigo: 12,
      descricao: "Refeição",
      entrada: 0,
      saida: 120,
      total: -120,
    },
    {
      codigo: 13,
      descricao: "Consultas médicas",
      entrada: 0,
      saida: 200,
      total: -200,
    },
    {
      codigo: 14,
      descricao: "Rendimentos de poupança",
      entrada: 50,
      saida: 0,
      total: 50,
    },
    {
      codigo: 15,
      descricao: "Compras online",
      entrada: 0,
      saida: 500,
      total: -500,
    },
    {
      codigo: 16,
      descricao: "Serviços domésticos",
      entrada: 0,
      saida: 150,
      total: -150,
    },
    {
      codigo: 17,
      descricao: "Presente de aniversário",
      entrada: 0,
      saida: 100,
      total: -100,
    },
    {
      codigo: 18,
      descricao: "Freelance",
      entrada: 800,
      saida: 0,
      total: 800,
    },
    {
      codigo: 19,
      descricao: "Curso online",
      entrada: 0,
      saida: 250,
      total: -250,
    },
    { codigo: 20, descricao: "Doação", entrada: 0, saida: 50, total: -50 },
  ];
  