import "../styles/styles.scss";
import ExampleForm from "../containers/example-form";
import Header from "./header";
import React from "react";

const App = (props) =>
  <div className="app">
    <Header />

    <ExampleForm />
  </div>;

export default App;
