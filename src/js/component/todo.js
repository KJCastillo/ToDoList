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
				<h1 className="pt-4">To Do List</h1>
			</div>
			<div className="row">
				{" "}
				<div className="input-group mb-3">
					<input
						onChange={e => setInput(e.target.value)}
						onKeyPress={event => {
							if (event.key === "Enter") {
								addTodo(input);
							}
						}}
						type="text"
						className="form-control"
						placeholder="Enter New Task"
						aria-label="Enter New Task"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button
							onClick={() => addTodo(input)}
							className="btn btn-secondary"
							type="submit"
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
									className="btn btn-secondary btn-sm ml-1 mb-1"
									onClick={() => {
										let del = todo.filter((el, id) => {
											return index !== id;
										});
										setTodo([...del]);
									}}>
									done
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
