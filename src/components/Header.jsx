import '../styles/components/Header.sass'
import '../styles/sass/responsivo_main.sass'

const Header = () => {
  return (
    <header className='principal'>
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