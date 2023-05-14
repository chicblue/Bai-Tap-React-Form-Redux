import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ReactForm from './ReactForm/ReactForm';
import { store } from './redux/configStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <ReactForm/>
    </Provider>
);

