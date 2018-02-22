import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link, BrowserRouter} from 'react-router-dom'
import App from './App';
import Dashboard from './pages/DashBoard';
import Todo from './pages/Todo';
import Landing from './pages/Landing';
ReactDOM.render(
<BrowserRouter>
    <div>
        <Route path="/" component={App}/>
        <Route exact path="/" component={Landing}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/todo" component={Todo}/>
    </div>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
