import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export function TaskInput() {
	const todo = useSelector((state) => state.todo.todos);
	const length = todo.length;
	const [newTask, setNewTask] = useState({
		id: length + 1,
		task: "",
		completed: false,
	});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: newTask });
	};
	return (
		<div style={{ width: "30rem", margin: "auto" }}>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Task Name</Form.Label>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Form.Control
							onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
							type="text"
							placeholder="Enter Task Name"
						/>

						<Form.Control
							className="btn btn-primary btn-sm w-25"
							type="submit"
							value="Add Task"
						/>
					</div>
				</Form.Group>
			</Form>
		</div>
	);
}
