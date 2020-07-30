import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import VideoCadaster from './pages/cadastro/video';
import VideoCategoria from './pages/cadastro/categoria'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={ Home } exact/>
    <Route path="/cadastro/video" component={VideoCadaster}/>
    <Route path="/cadastro/categoria" component={VideoCategoria}/>
    <Route component={ () => (<div> Página 404 </div>) } />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

