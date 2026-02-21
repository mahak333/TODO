import React from 'react';

const TodoItem = ({ todo }) => {
    return (
        <div className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <span>{todo.completed ? 'Completed' : 'Pending'}</span>
        </div>
    );
};

export default TodoItem;