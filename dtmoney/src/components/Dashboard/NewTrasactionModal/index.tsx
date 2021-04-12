import { useState } from "react";
import { Container } from './style'
import Modal from 'react-modal'
import { Header } from '../../Header'



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


    return (

        <Modal

            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >

            <h2>Cadastrar transação</h2>

        </Modal>



    )

}