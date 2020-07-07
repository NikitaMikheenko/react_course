import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';

configureStore();

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById('root')
);


// =======Context API=======

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import ProductsProvider from './context/products-context';

// ReactDOM.render(
//     <ProductsProvider>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </ProductsProvider>,
//     document.getElementById('root')
// );


// =======Redux=======

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//     shop: productReducer
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );
