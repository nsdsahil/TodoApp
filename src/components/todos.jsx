import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TaskCard } from "./card";

/**
 * @author
 * @function Login
 **/

export const Todos = (props) => {
	const todos = useSelector((state) => state.todo.todos);

	console.log(todos);

	return (
		<div>
			<div className="input-group mb-3">
				{" "}
				<h1>Tasks</h1>
			</div>
			{todos.map((todo, index) => (
				<TaskCard
					num={index + 1}
					key={todo.id}
					style={{ width: "18rem" }}
					task={todo}
				/>
			))}
		</div>
	);
};
