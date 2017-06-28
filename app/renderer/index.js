import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "./panal.css";
import App from "./app";

function render() {
  const styleA = { background: "#eee" };
  const styleB = { background: "#aaa4ba" };
  const styleC = { background: "#000" };
  const styleD = { padding: "2em", fontStyle: "italic" };
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./app", () => { render(); });
}
