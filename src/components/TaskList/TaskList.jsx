import { useState } from "react";
import { Task } from "../Task/Task";
import { TaskForm } from "../TaskForm/TaskForm";

export function TaskList(props) {

    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        const taskListUpdated = [task, ...taskList];
        setTaskList(taskListUpdated);
    };

    const removeTask = (taskId) => {
        const taskListUpdated = taskList.filter(task => task.id !== taskId);
        setTaskList(taskListUpdated);
    };

    const completeTask = (taskId) => {
        const taskListUpdated = taskList.map(task => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTaskList(taskListUpdated);
    };

    return (
        <div className="main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum officiis optio facilis expedita libero? Quasi, sequi quia. Iusto blanditiis facere doloremque? Vero totam nisi nesciunt quis nam quo natus?
            <TaskForm onSubmit={addTask} />
            <hr />
            <div className="task-list">
                {
                    taskList.map(task => <Task key={task.id} id={task.id} title={task.title} completed={task.completed} onComplete={completeTask} onDelete={removeTask} />)
                }
            </div>
        </div>
    );
}