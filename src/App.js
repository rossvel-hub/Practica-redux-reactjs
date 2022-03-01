import React from 'react'
import { Provider } from 'react-redux';
import store from "./store";
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import "./styles/styles.scss"

const App = () => {
  return (
    <Provider store={store}>
    <main>
      <h1>EQUIPO SOCCER</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
    </Provider>
  );
}

export default App;
