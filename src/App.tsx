import React from 'react';
import './App.css';
import UseStateComponent from './usestate/usestate.component';
import UseReducer from './useReducer/usereduer.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="use__state">
        <UseStateComponent />
      </div>
      <div className="use_reducer">
        <UseReducer />
      </div>
    </div>
  );
}

export default App;
