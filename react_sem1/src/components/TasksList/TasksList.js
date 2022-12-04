import React from 'react';
import './TasksList.css'
import Task from '../Task/Task';

function TasksList(props) {
    return (
        <div className='tasks-list-container'>
            <div className='tasks-list'>                  
                { props.tasks.map(task => <Task key={task.key} text={task.text} id={task.id} removeTask={props.removeTask}/>) }
            </div>
        </div>
    );
}

export default TasksList;