import React from "react";
import Root from "./containers/root";
import injectTapEventPlugin from "react-tap-event-plugin";
import {render} from "react-dom";

injectTapEventPlugin();

render(<Root />, document.getElementById("root"));
