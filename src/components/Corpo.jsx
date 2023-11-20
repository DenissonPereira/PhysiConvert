import React, { useState } from 'react';
import Avatar from '../image/atomo.png'
import Back from '../image/plano.jpg'
import '../styles/components/Corpo.sass';
import '../styles/sass/responsivo_main.sass';
import '../scripts/pesquisa';

const Corpo = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className='corpo'>
      <div className='corpo1'>
        <div className='caixa'>
          <p title='PhysiConvert'><span className='black'>Physi</span><span className='verde'>Convert</span></p>
          <div className='buscador'>
            <input
              title='Pesquise aqui'
              type="search"
              id='searchInput'
              className='barra_pesquisa'
              placeholder="Pesquise aqui..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button 
            title='Ir'
            onClick={window.pesquisar} 
            className='btn_ir' 
            id='meuBotao'
            >Ir</button>
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
              <img src={Avatar} alt="atomo" />
            </figure>
            <p>Loorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus dolor omnis blanditiis in.</p>
          </div>
          <div className='caixa2'>
            <figure>
              <img src={Avatar} alt="atomo" />
            </figure>
            <p>Lorm ipsum dolor sit amet consectetur adipisicing elit. Amet minus dolor omnis blanditiis in.</p>
          </div>
          <div className='caixa2'>
            <figure>
              <img src={Avatar} alt="atomo" />
            </figure>
            <p>Looorem ipsuum dolor sit ametkk consectetur adipisicing elit. Amet minus dolor omnis blanditiis in.</p>
          </div>
        </div>
        <div className='caixa_conversores'> 
          <p>Conversores Populares</p>
          <div className='conversores'>
            <p>fejfoijrfjorfrfr</p>
          </div>
          <div className='conversores'>
            <p>fejfoijrfjorfrfr</p>
          </div>
          <div className='conversores'>
            <p>fejfoijrfjorfrfr</p>
          </div>
          <div className='conversores'>
            <p>fejfoijrfjorfrfr</p>
          </div>
        </div>
      </div>
      <script src="../src/scripts/script.js"></script>
    </div>
  )
}

export default Corpo;
