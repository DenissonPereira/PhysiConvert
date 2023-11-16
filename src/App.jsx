import Corpo from './components/Corpo'
import Header from './components/Header'
import './styles/main.sass'

function App() {

  return (
    <div className="app">
      <Header />
      <div className='corpo-container'>
        <Corpo />
      </div>
    </div>
  )
}

export default App
