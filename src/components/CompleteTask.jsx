import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TaskCard } from "./card";

/**
 * @author
 * @function Login
 **/

export const CompleteTask = (props) => {
	const todos = useSelector((state) => state.todo.todos);

	const newTasks = todos.filter((task) => task.completed == true);

	return (
		<div>
			<div className="input-group mb-3">
				{" "}
				<h1>Completed Tasks</h1>
			</div>
			{newTasks.map((todo, index) => (
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
