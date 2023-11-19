import '../styles/components/Corpo.sass'

const Corpo = () => {
  return (
    <div className='corpo'>
        <div className='caixa'>
            <p>PhysiConvert</p>
            <div className='buscador'>
                <input type="search" className='barra_pesquisa' placeholder="Search" /><button className='btn_ir'>Ir</button>
            </div>
        </div>
    </div>
  )
}

export default Corpo