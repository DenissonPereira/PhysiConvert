import Corpo from './components/Corpo'
import Header from './components/Header'
import SocialNetworks from './components/SocialNetworks'
import './styles/main.sass'

function App() {

  return (
    <div className="app">
      <Header />
      <div className='corpo-container'>
        <Corpo />
      </div>
      <footer className='footer'>
        <SocialNetworks />
      </footer>
    </div>
  )
}

export default App
