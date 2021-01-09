import React from 'react';
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const divRoot = document.querySelector('#app');

//ReactDOM.render(<PrimeraApp />,divRoot);
//ReactDOM.render(<PrimeraApp saludo='hola, jennie'/>,divRoot);
ReactDOM.render(<CounterApp  />,divRoot);
