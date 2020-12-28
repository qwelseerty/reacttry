import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList (props){
    const styles = {
        ul: {
            listStyle:'none',
            margin:0,
            padding:0,
        }
    }

    return (
        <div >
            <ul style={styles.ul}>
                {props.todos.map((todo,index)=>{return <TodoItem key={todo.id} todo={todo} index={index} onChange={props.onToggle}/>})}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default TodoList