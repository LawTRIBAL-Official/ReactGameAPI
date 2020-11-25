import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data/data';

ReactDOM.render(
  <React.StrictMode>
  {/* data={data} passere vores data.js ind i vores index.js og videre til resten af filerne */}
    <App data={data}/> 
  </React.StrictMode>,
  document.getElementById('root')
);