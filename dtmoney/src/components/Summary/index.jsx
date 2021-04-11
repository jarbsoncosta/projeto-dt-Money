import iconeImg from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { Container } from './style'

export function Summary() {


    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconeImg} alt="Entradas" />

                </header>
                <strong>
                    R$1000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saidas" />
                </header>
                <strong>
                    -R$500,00
                    </strong>
            </div>
            <div className="higthlight-background">

                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />

                </header>
                <strong>
                    R$500,00
                 </strong>
            </div>

        </Container>
    )
}