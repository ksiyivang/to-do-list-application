
import React from 'react';
import Preloader from './Preloader';
import TodoItem from './TodosItem'



const Todos = ({ todos }) => {
    return (
        todos && todos?.data ? todos.data.map((todo) => {
            return (
                <div>
                    <TodoItem key={todo.id} todo={todo} />
                    <h1>
                        {todo.message}
                    </h1>
                </div>
            )
        })
            :
            <Preloader />
    );
}

export default Todos;