import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';

render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById('play')
);
