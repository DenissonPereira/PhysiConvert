import '../styles/components/Corpo.sass'

const Corpo = () => {
  return (
    <div className='corpo'>
        <div className='corpo1'>
          <div className='caixa'>
              <p>PhysiConvert</p>
              <div className='buscador'>
                  <input type="search" className='barra_pesquisa' placeholder="Search" /><button className='btn_ir'>Ir</button>
              </div>
        </div>
        </div>
        <div className='conteudo'>
          <div className='slogam'>
            <p>
              <strong>PhysiConvert:</strong> Simplificando o Mundo Físico, Unidade por Unidade.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Corpo