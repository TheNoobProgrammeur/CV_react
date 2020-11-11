import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from "@fortawesome/free-brands-svg-icons";
import {
    faUserCircle,
    faMailBulk,
    faTerminal,
    faInfo,
    faAngleUp,
    faAngleDown,
    faDatabase,
    faCode,
    faProjectDiagram,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab,
    faUserCircle,
    faMailBulk,
    faTerminal,
    faInfo,
    faAngleUp,
    faAngleDown,
    faDatabase,
    faCode,
    faProjectDiagram,
    faGlobe,
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
