//react libraries
import React from "react";
import ReactDOM from "react-dom";

//redux libraries
import { Provider } from "react-redux";
import { createStore } from "redux";

//reducer map
import reducers from "./reducers";

//App component
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
