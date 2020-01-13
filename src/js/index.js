//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

// state = { value: "" };

class ToDoList extends React.Component {
	render() {
		return (
			<div>
				<h1 className="title">To Do List</h1>
				<input className="input" />
			</div>
		);
	}
}
//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
