import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import Modal from "react-modal";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpemNewTransactionModal: () => void;
}
export function Header({ onOpemNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpemNewTransactionModal}>
          Nova Transação
        </button>
        {/* <Modal
          isOpen={isNewTransactionModalOpem}
          onRequestClose={handleCloseNewTransactionModal}
        >
          Cadastro de um transação
        </Modal> */}
      </Content>
    </Container>
  );
}
