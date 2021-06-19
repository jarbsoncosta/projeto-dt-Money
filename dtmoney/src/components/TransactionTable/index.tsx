
import { useTransections } from "../../hooks/useTransections";
import { Container } from "./style";
import { FiEdit3, FiTrash } from 'react-icons/fi'





export function TransactionTable() {

    const { transactions, deleteTransaction } = useTransections()


    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoia</th>
                        <th>Data</th>
                        <th>Opção</th>
                    </tr>

                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td >{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}

                                </td>
                                <td>
                                    <div className="options">

                                        <button
                                            type="submit"
                                            className="edit"

                                        >

                                            <FiEdit3 />
                                        </button>
                                        <button
                                            type="submit"
                                            className="delete"
                                            onClick={deleteTransaction}

                                        >
                                            <FiTrash />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        )
                    })}



                </tbody>
            </table>

        </Container>
    )
}