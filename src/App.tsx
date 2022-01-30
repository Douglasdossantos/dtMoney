// import styled from "styled-components";

// const Title = styled.h1`
//   color: #8257e6;
//   font-size: 64px;
// `;
import { useState } from "react";
import { Dashboard } from "./components/DashBoard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/newTransactionModal";
import {
  TransactionsContext,
  TransactionsProvider,
} from "./TransactionContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpem, setNewTransactionModalOpem] =
    useState(false);

  function handleOpemNewTransactionModal() {
    setNewTransactionModalOpem(true);
  }
  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpem(false);
  }
  return (
    <TransactionsProvider>
      <Header
        onOpemNewTransactionModal={handleOpemNewTransactionModal}
      ></Header>

      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpem}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>

      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  );
}
