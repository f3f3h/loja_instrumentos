import Styles from './css/endereco.module.css'

function Endereco() {
  return (

    <endereco id="endereco">


      <div className={Styles.quadro1}>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122782716492!2d-46.6917602!3d-23.528085899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1790603195284!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

      </div>

      <div className={Styles.quadro2}>

        <h1>
          Nossa Loja - Instrumentos Musicais
        </h1>

        <p>
          Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m², com uma variada gama de instrumentos, em um ambiente agradável para toda a família.
        </p>

      </div>

    </endereco>
  )
}

export default Endereco