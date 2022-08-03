import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';


class App extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      numClicks: 0
    };

    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);

  }

  manejarClic(){
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1}));
  }

  reiniciarContador (){
    this.setState( { numClicks:0 } );
  }
  
  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de FreeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador 
            numClicks={this.state.numClicks}
          />
          <Boton 
            texto='Click'
            esBotonDeClic={true}
            manejarClic={this.manejarClic}
          />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador}
          />
        </div>
       
      </div>
    );
  }
}


export default App;
