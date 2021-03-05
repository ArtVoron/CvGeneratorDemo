import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStore } from "redux";
import { saveState,loadState } from "./localStorage/localStorage";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3939BB',
    },
    secondary: {
      main: '#4CAF50',
    },
    default: {
      main: '#FAFAFA'
    }
  },
});

const persistedState=loadState();

//test text

// const store = createStore(
//   persistedState
// )

// store.subscribe(()=>{
//   saveState(store.getState())
// })


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
