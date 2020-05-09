import React from 'react';
import NavBar from './components/NavBar';
import InputForm from './components/InputForm';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/completed">
            <h1>
              Section Completed
            </h1>
          </Route>
          <Route path="/task/add">
            <InputForm />
          </Route>
        </Switch>
        <NavBar />
    </BrowserRouter>
      </Provider>
  );
}

export default App;
