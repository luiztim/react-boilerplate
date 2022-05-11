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
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

