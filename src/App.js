import React, { Component } from 'react';
import './App.css';
// import SearchingContainer from './Searching/SearchingContainer';
import { Provider } from 'react-redux'
import Store from './Store/Store'
import Routing from './Routing/Routing';
class App extends Component {
  
  render() {
    return (
      <Provider store={Store}>
      <div className="App">
      <Routing/>
      </div>
      </Provider>
    );
  }
}

export default App;

