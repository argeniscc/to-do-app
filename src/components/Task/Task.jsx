import './Task.css';
import { IoIosCloseCircleOutline, IoIosArrowDropdown } from 'react-icons/io';

export function Task(props) {
    return (
        <div className={props.completed ? 'task completed' : 'task'}>
            <div className="task-title">{props.title}</div>
            <div className="task-actions">
                {!props.completed && <IoIosArrowDropdown title='Completar tarea' size={18} className="complete" onClick={() => props.onComplete(props.id)} />}
                <IoIosCloseCircleOutline title='Eliminar tarea' onClick={() => props.onDelete(props.id)} size={18} className="delete" />
            </div>
        </div>
    );
}