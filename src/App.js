import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import DataComponent from './containers/DataComponent';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Axios Example</h1>
        <Header/>
        <DataComponent />
      </div>
    </Provider>
  );
}

export default App;
