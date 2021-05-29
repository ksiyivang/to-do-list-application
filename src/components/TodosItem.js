import React from 'react'

const TodoItem = ({ todo }) => {
    return (
        <div className="todoItem">
            <p>{todo.id}</p>
        </div>
    )
}

export default TodoItem
