import '../styles/components/Header.sass'

const Header = () => {
  return (
    <header className='principal'>
      <div className='imagem_logo'>
        <img src="../src/image/logo.png" alt="logo" />
      </div>
        <nav className='menu'>
            <ul>
                <li>Home</li>
                <li>Conversor</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header