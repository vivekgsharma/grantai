import React from "react";
import App from "./App";
import "./index.css";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
