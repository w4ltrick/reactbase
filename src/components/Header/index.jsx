import "./styles.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="containerHeader">
      <h1 className="titleHeader">Finance</h1>
      <div className="containerItensHeader">
        <Link className="linkHeader" to="/">
          Home
        </Link>
        <Link className="linkHeader" to="Transactions">
          Transações
        </Link>
      </div>
    </div>
  );
}


