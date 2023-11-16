import '../styles/components/Header.sass'

const Header = () => {
  return (
    <header>
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