import Styles from './css/header.module.css'

function Header() {
  return (

 <header className={Styles.header}>

      <nav className={Styles.menu}>
        <a href="#home">Home</a>
        <a href="#quem-somos">Quem Somos</a>
        <a href="#instrumentos">Instrumentos</a>
        <a href="#endereco">Endereço</a>
        <a href="#contato">Contato</a>
      </nav>

    </header>
  )
}

export default Header