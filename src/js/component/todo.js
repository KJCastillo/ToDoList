import React, { useState } from "react";

//create your first component

export const ToDoList = () => {
	const [todo, setTodo] = useState([]);
	const [input, setInput] = useState();
	function addTodo(todos) {
		setTodo([...todo, todos]);
	}

	return (
		<div className="container">
			<div className="row">
				<h1>To Do List</h1>
			</div>
			<div className="row">
				{" "}
				<div className="input-group mb-3">
					<input
						onChange={e => setInput(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Enter New Task"
						aria-label="Enter New Task"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button
							onClick={() => addTodo(input)}
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
						return (
							<li key={index}>
								{item}{" "}
								<button
									onClick={() => {
										let del = todo.filter((el, id) => {
											return (
												index !== todo.indexOf(todo[id])
											);
										});
										setTodo([...del]);
									}}>
									delete
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
