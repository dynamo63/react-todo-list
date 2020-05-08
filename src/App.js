import React from 'react';
import NavBar from './components/NavBar';
// import InputForm from './components/InputForm';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Home />
      <NavBar />
    </Provider>
  );
}

export default App;
