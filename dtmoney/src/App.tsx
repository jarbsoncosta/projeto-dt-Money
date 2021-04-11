import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'


Modal.setAppElement('#root')

export function App() {

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true);

  }
  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false);

  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <Modal

        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >

        <h2>Cadastrar transação</h2>

      </Modal>

    </>
  );
}

export default App;
