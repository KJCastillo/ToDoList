//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function ToDoList() {
	return <h1>To Do List</h1>;
}

//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
