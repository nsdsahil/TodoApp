import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Todos } from "./todos";
import { TaskInput } from "./TaskInput";
import { InCompleteTask } from "./InCompleteTask";
import { CompleteTask } from "./CompleteTask";

export function TodoTab() {
	return (
		<Tabs
			defaultActiveKey="profile"
			id="fill-tab-example"
			className="mb-3"
			fill
		>
			<Tab color="primary" eventKey="home" title="Tasks List">
				<Todos />
			</Tab>
			<Tab eventKey="profile" title="Add Task">
				<TaskInput />
			</Tab>
			<Tab eventKey="longer-tab" title="Completed Tasks">
				<CompleteTask />
			</Tab>
			<Tab eventKey="contact" title="Incpomplete Tasks">
				<InCompleteTask />
			</Tab>
		</Tabs>
	);
}
