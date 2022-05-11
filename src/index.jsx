/* 
// React v17 - deprecado
   import { render } from 'react-dom';
   import { App } from './App'
   render(< App />, document.getElementById('root'))
*/

// React v18

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import { App } from './App'

const rootElement = document.getElementById('root');

// Se estiver usando TS, declare root adicionando
// o operador ! ao final...
// const root = createRoot(rootElement!);

//Caso contrario, pode declarar assim:
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

