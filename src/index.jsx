import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'
import { App } from './App';
import data from './store/data.json';


const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(<App />);