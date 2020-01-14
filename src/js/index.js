//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { ToDoList } from "../js/component/todo";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

// state = { value: "" };

//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
