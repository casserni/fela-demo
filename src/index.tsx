import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import FelaProvider from "./containers/fela";
import "./index.css";

ReactDOM.render(
  <FelaProvider>
    <App />
  </FelaProvider>,
  document.getElementById("root") as HTMLElement
);
