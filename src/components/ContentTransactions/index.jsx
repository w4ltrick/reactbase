import { useState, useEffect } from "react";
import { addTransaction, getTransactions } from "../../../LocalDB"; // Importe as funções do LocalDB
import "./styles.css";

export function ContentTransactions() { 
  const [descricao, setDescricao] = useState("");
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Carrega as transações do LocalDB ao iniciar o componente
    const storedTransactions = getTransactions();
    setTransactions(storedTransactions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTransaction = { descricao, entrada, saida };
    addTransaction(newTransaction); // Adiciona a nova transação ao LocalDB
    setTransactions([...transactions, newTransaction]); // Atualiza o estado local

    // Limpa os campos do formulário
    setDescricao("");
    setEntrada("");
    setSaida("");
  };

  return (
    <div className="containerTransacoes">
      <h1 className="tituloTransacoes">Transações</h1>
      <form onSubmit={handleSubmit} className="formTransacoes">
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Entrada"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />
        <input
          type="number"
          placeholder="Saída"
          value={saida}
          onChange={(e) => setSaida(e.target.value)}
        />
        <button type="submit">Adicionar Transação</button>
      </form>
      <div>
        <h2>Lista de Transações</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.descricao} - Entrada: {transaction.entrada} - Saída: {transaction.saida}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}