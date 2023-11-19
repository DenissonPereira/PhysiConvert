import Corpo from './components/Corpo'
import Header from './components/Header'
import SocialNetworks from './components/SocialNetworks'
import Footer from './components/Footer'
import './styles/main.sass'

function App() {

  return (
    <div className="app">
      <Header />
      <div className='corpo-container'>
        <Corpo />
      </div>
      <div className='footer'>
        <SocialNetworks />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
