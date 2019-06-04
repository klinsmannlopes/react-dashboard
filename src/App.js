import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/resumo/resumo';
import Consulta from './components/Consultas/Consultas';
import Faturamento from './components/Faturamentos/Faturamentos';
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
      <div>
        <MenuSuperior/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component={Resumo}/>
                <Route path="/consulta" exact component={Consulta}/>
                <Route path="/faturamento" exact component={Faturamento}/>
              </Switch>
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;