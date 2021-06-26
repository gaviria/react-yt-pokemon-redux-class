import './App.css';
import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/CompraPokemon';
import CantidadPokemonHook from './components/CantidadPokemon.hooks';
import ComprarPokemonHook from './components/CompraPokemon.hooks';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App container">
        <div className="row">
          <div className="col-6">
            <div className="card mt-5 style={{maxWidth: '370px'}} ">
              <div className="row no-gutters">
                <div className="col-4">
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemon/>
                    </div>
                    <ComprarPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mt-5 style={{maxWidth: '370px'}} ">
              <div className="row no-gutters">
                <div className="col-4">
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook/>
                    </div>
                    <ComprarPokemonHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </Provider>
  );
}

export default App;
