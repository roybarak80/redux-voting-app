import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import Result from './components/results';
import myApp from './reducers';



// COMPONENTS

let store = createStore(myApp);

//const createStoreWithMiddleware = applyMiddleware()(createStore)

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store} />
      <hr />
      <Result store={store}/>
    </div>,
    document.getElementById('root')
  );
}


store.subscribe(render);
render();
