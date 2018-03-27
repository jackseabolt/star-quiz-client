import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import {BrowserRouter as Router} from 'react-router-dom'; 
import { ParallaxProvider } from 'react-scroll-parallax';
import store from './store'; 

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

