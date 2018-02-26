import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import {  Route,  BrowserRouter} from 'react-router-dom'
import App from './App';
import Dashboard from './pages/DashBoard';
import Todo from './components/Todo';
import Landing from './pages/Landing';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route exact path="/" component={Landing}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/todo" component={Todo}/>
            </div>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
