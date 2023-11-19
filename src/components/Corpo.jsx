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
          <div className='caixas'>
            <div className='caixa2'>
            <figure>
              <img src="../src/image/atomo.png" alt="atomo" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus dolor omnis blanditiis in.</p>
            </div>
            <div className='caixa2'>
            <figure>
              <img src="../src/image/atomo.png" alt="atomo" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus dolor omnis blanditiis in.</p>
            </div>
            <div className='caixa2'>
            <figure>
              <img src="../src/image/atomo.png" alt="atomo" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus dolor omnis blanditiis in.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Corpo