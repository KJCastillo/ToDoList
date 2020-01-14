import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export const ToDoList = () => {
	const [todo, setTodo] = useState(["Drive the car", "Wash the turtle"]);
	const [obj, setObj] = useState([
		{ todo: "Drive the car" },
		{ todo: "Wash the turtle" }
	]);
	const [input, setInput] = useState();
	function addTodo(todos) {
		setTodo([...todo, todos]);
	}
	function addObj(todos) {
		setObj([{ ...obj, todo: todos }]);
	}
	return (
		<div className="container">
			<div className="row">
				<h1>Todo</h1>
			</div>
			<div className="row">
				{" "}
				<div className="input-group mb-3">
					<input
						onChange={e => setInput(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Recipient's username"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button
							onClick={
								(() => addTodo(input), () => addObj(input))
							}
							className="btn btn-outline-secondary"
							type="button"
							id="button-addon2">
							Add
						</button>
					</div>
				</div>
			</div>
			<div className="row">
				<ul>
					{todo.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
			<div className="row">
				<ul>
					{obj.map((item, index) => {
						return <li key={index}>{item.todo}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};
