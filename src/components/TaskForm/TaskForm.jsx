import { useState } from 'react';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

export function TaskForm(props) {

    const [task, setTask] = useState('');
    const taskInput = useRef();
    const handleTaskTitle = event => {
        setTask(event.target.value);
    };

    const submitTask = event => {
        event.preventDefault();
        if (task.trim()) {
            const taskObject = {
                id: uuidv4().toString(),
                title: task,
                completed: false,
            }
            props.onSubmit(taskObject);
            taskInput.current.value = ''
        }
    }

    return (
        <form className="task-form" onSubmit={submitTask}>
            <input type="text" ref={taskInput} id="task-title" placeholder="Agreaga una tarea..." className="task-input" onChange={handleTaskTitle} />
            <button type="submit" className="btn btn-add-task">Agregar</button>
        </form>
    );
}