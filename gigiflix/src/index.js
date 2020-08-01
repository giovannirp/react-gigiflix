import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/App';
import NotFound from './pages/NotFound/NotFound';
import CadastroVideo from './pages/Cadastro/Cadastro';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Home path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

