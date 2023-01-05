import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Hello({...props}) {
  return (
    <h1>Hello {props.target} {props.text}</h1>
  );
}
 

// root.render(
//   <>
//     <Hello target={"Bono"}/>
//     <Hello target={"Batman"}/>
//     <Hello target={"Iron man"} text={"fwoosh"}/>
//   </>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
