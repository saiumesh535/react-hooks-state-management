import React from 'react';
import './App.css';
import UseStateComponent from './usestate/usestate.component';
import UseReducer from './useReducer/usereduer.component';
import ContextProvider from './useContext/usecontext.component';
import AdvContextConsumer from './useContext/advanced/advanced.context.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="use__state">
        <UseStateComponent />
      </div>
      <div className="use_reducer">
        <UseReducer />
      </div>
      <div className="simple__context">
        <ContextProvider />
      </div>
      <div className="adv__context">
        <AdvContextConsumer />
      </div>
    </div>
  );
}

export default App;
