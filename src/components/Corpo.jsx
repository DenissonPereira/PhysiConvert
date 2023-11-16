import '../styles/components/Corpo.sass'

const Corpo = () => {
  return (
    <div className='corpo'>
        <div className='caixa'>
            <div className='buscador'>
                <input type="search" className='barra_pesquisa' placeholder="Search" /><button className='btn_ir'>Ir</button>
            </div>
        </div>
    </div>
  )
}

export default Corpo