import Styles from './css/footer.module.css'

import Whatsapp from '../assets/imagens/whats.png'
import Instagram from '../assets/imagens/insta.png'
import Facebook from '../assets/imagens/face.png'

function Footer() {
    return (
        <footer className={Styles.footer}>

            <p className={Styles.titulo}>
                Nossa Loja - Instrumentos Musicais
            </p>

            <p>
                Rua Tito, 54 - Lapa
                <br />
                São Paulo - Brasil
            </p>

            <div className={Styles.icones}>

                <img src={Whatsapp} alt="WhatsApp" />

                <img src={Instagram} alt="Instagram" />

                <img src={Facebook} alt="Facebook" />

            </div>

        </footer>
    )
}

export default Footer