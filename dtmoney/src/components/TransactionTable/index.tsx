import { useEffect } from "react";
import { api } from '../../services/api'
import { Container } from "./style";

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => response.data)
    }, [])

    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoia</th>
                        <th>Data</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de Websit</td>
                        <td className="deposit">$1200</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel </td>
                        <td className="withdraw">$300</td>
                        <td>Casa</td>
                        <td>20/03/2021</td>
                    </tr>


                </tbody>
            </table>

        </Container>
    )
}