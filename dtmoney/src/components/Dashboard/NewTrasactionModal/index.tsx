
import { Container, TransactionTypeContainer } from './style'
import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'
import Modal from 'react-modal'




interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


    return (

        <Modal

            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                />
                <input
                    type="number"
                    placeholder="Valor"
                />
                <TransactionTypeContainer>
                    <button

                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button

                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>



                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>


            </Container>




        </Modal>



    )

}