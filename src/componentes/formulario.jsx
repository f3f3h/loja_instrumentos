import Styles from './css/formulario.module.css'
import WhatsApp from '../assets/imagens/whats.png'
import Instagram from '../assets/imagens/insta.png'
import Facebook from '../assets/imagens/face.png'

function Formulario() {

  function enviarFormulario(event) {
    event.preventDefault()
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <formulario id="contato" className={Styles.formulario} onSubmit={enviarFormulario}>

      <div className={Styles.form}>
        <label>Entre com o seu nome:</label>
        <input id="nome" type="text" placeholder="Digite seu nome aqui" required />

        <label>Entre com o seu e-mail:</label>
        <input id="email" type="email" placeholder="Digite seu e-mail aqui" required />

        <label>Digite sua mensagem:</label>
        <textarea id="pedido" placeholder="Digite seu pedido por aqui" required></textarea>

        <button type="submit">Enviar</button>
      </div>

      <div className={Styles.redes}>
        <h1>Acesse também nossas redes sociais:</h1>

        <div className={Styles.icones}>
          <a href="#" aria-label="WhatsApp"><img src={WhatsApp} alt="WhatsApp" /></a>
          <a href="#" aria-label="Instagram"><img src={Instagram} alt="Instagram" /></a>
          <a href="#" aria-label="Facebook"><img src={Facebook} alt="Facebook" /></a>
        </div>
      </div>

    </formulario>
  )
}

export default Formulario