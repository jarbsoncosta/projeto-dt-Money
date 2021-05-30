import iconeImg from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransections } from '../../hooks/useTransections'

import { Container } from './style'

export function Summary() {
    const { transactions } = useTransections()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrawns += transaction.amount;
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposit: 0,
        withdrawns: 0,
        total: 0
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconeImg} alt="Entradas" />

                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}

                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saidas" />
                </header>
                <strong> -
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdrawns)}
                </strong>
            </div>
            <div className="higthlight-background">

                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />

                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>

        </Container>
    )
}