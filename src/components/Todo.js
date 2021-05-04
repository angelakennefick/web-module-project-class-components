import React from 'react';


export default function TodoList(props) {
    return (
        <div>
           <p style={{ textDecoration: props.task.completed ? 'line-through' : null}} onClick={() => props.toggleCompleted(props.task.id)}> {props.task.labor}</p>
        </div>
    );
}