import "../styles/styles.scss";
import ExampleForm from "../containers/example-form";
import Header from "./header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React from "react";

const App = (props) =>
  <MuiThemeProvider>
    <div className="app">
      <Header />

      <ExampleForm />
    </div>
  </MuiThemeProvider>;

export default App;
