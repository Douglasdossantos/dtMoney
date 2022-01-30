import React, { useContext } from "react";
import { Container } from "./styles";
import entradasSvg from "../../assets/entradas.svg";
import saidasSvg from "../../assets/saídas.svg";
import totalSvg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasSvg} alt="Entradas" />
        </header>
        <strong>R$ 1000.00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasSvg} alt="saídas" />
        </header>
        <strong>R$ - 500.00</strong>
      </div>
      <div className="cor-de-fundo">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>R$ 500.00</strong>
      </div>
    </Container>
  );
}
