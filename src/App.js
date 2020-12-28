import React from 'react'
import TodoList from "./todo/Todolist";

function App() {
    const todos = [
        {id: 1, completed: false, title: 'buy bread'},
        {id: 2, completed: false, title: 'buy eggs'},
        {id: 3, completed: false, title: 'buy milk'
        }]
    function toggleTodo(id){
        console.log('todois', id)

    }

    return (
        <div className={'wrapper'}>
            <h1> My React App
        </h1>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}


export default App;
