import React, { useRef } from 'react';

const TodoInput = ({ createTodo }) => {

    const todoInputRef = useRef(null);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const _todoInput = todoInputRef.current.value
        createTodo(_todoInput)
        e.target.value = ""

        console.log("_todoInput: ", _todoInput)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={todoInputRef} required />
            <input type="submit" />
        </form>
    )
}

export default TodoInput;