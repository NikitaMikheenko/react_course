import React from 'react';
import ReacDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReacDOM.render(app, document.getElementById('root'));