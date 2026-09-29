import Styles from './css/violao.module.css'
import Imagem from '../assets/imagens/guitarrinha.jpg'

function Violao() {

    return (
        <violao id="instrumentos" className={Styles.violao}>

            <div className={Styles.quadro}>
                <img src={Imagem} alt="Violão Yamaha" />
                <p className={Styles.nome}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 899,50</p>
            </div>

            <div className={Styles.quadro}>
                <img src={Imagem} alt="Violão Yamaha" />
                <p className={Styles.nome}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 899,50</p>
            </div>

            <div className={Styles.quadro}>
                <img src={Imagem} alt="Violão Yamaha" />
                <p className={Styles.nome}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 899,50</p>
            </div>

            <div className={Styles.quadro}>
                <img src={Imagem} alt="Violão Yamaha" />
                <p className={Styles.nome}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 899,50</p>
            </div>

        </violao>
    )
}

export default Violao