import { dados } from "../../../LocalDB";
import "./styles.css";
import saida from "/img/saida.png";
import Entrada from "/img/entrada.png";
import { Link } from "react-router-dom";

export function ContentHome() {
  function somaEntrada() {
    let valorTotal = 0;

    dados.map(function (currentValue) {
      valorTotal = valorTotal + currentValue.entrada;
    }, 0);
    return valorTotal;
  }

  function somaSaida() {
    let valorTotal = 0;

    dados.map(function (currentValue) {
      valorTotal = valorTotal + currentValue.saida;
    }, 0);
    return valorTotal;
  }

  function somaValor() {
    let valorTotal = 0;

    dados.map(function (currentValue) {
      valorTotal = valorTotal + currentValue.total;
    }, 0);
    return valorTotal;
  }

  return (
    <div className="containerContentHome">
      <h1 className="titleContentHome">Home</h1>
      <div className="ContainerItensHome">
       
        <div className="titleContentText">
          <img src={Entrada} alt="Entrada" />
          <p>Entrada: {somaEntrada()}</p>
          <button className="adicionarEntrada"><Link to="Transactions" className="cor">Adicionar Entrada</Link></button>
        </div>

        
        <div className="titleContentText">
          <img src={saida} alt="Saída" />
          <p>Saída: {somaSaida()}</p>
          <button className="adicionarSaida"><Link to="Transactions" className="cor">Adicionar Saída</Link></button>
        </div>

        
        <div className="titleContentText">
          <p style={{ color: 'green' }}>Saldo: {somaValor()}</p>
        </div>
      </div>
    </div>
  );
}
