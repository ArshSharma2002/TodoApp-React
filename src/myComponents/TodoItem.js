import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="my-3 border border-1 border-grey p-4 rounded-3">
            <h4>{todo.Title}</h4>
            <p>{todo.Desc}</p>
            <button className="btn btn-danger btn-sm " onClick={()=>{onDelete(todo)}} >Delete</button>
        </div>
    )
}
