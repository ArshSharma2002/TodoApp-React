import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container my-4 ">
            
            {props.todos.length===0?"You Have Completed All the Tasks :)":
            props.todos.map((todo) => {
                return (
                    <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete}/>
                    )
                })
            }


        </div>
    )
}
