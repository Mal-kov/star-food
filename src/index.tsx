import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import {Button} from '@ya.praktikum/react-developer-burger-ui-components';

ReactDOM.render(
  <React.StrictMode>
    <App />


    {/* <Button type="primary" size="medium">
      Я кнопка из UI системы Yandex
    </Button> */}
  </React.StrictMode>,
  document.getElementById('root')
);

<script async src="//pixel-perfect.org/service/script.js?guid=a59dd8400a96022d6e27d44f04b897ad"></script>







// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
