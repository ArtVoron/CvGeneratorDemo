import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import { MuiTheme } from "./constants/MuiTheme";
import reportWebVitals from "./reportWebVitals";

// const persistedState = loadState();

// const store = createStore(
//   persistedState
// )

// store.subscribe(()=>{
//   saveState(store.getState())
// })

ReactDOM.render(
  <ThemeProvider theme={MuiTheme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
