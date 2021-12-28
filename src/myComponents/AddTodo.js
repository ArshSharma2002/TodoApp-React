import React from 'react'
import { useState } from 'react';


export const AddTodo = (props) => {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!Title || !Desc){
            alert("Title or Description can not be empty.")
        }
        else{props.addTodo(Title,Desc);
        setTitle("");
        setDesc("");}
    }
    return (
        <div className="container">
            <h2 className="text-center my-4">Tasks to do</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputTodo" className="form-label">Todo Title</label>
                    <input type="Text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputTodo" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDesc" className="form-label">Description</label>
                    <input type="text" value={Desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputDesc" />
                </div>
                <button type="submit" className="btn btn-sm btn-danger">Add Todo</button>
            </form>
        </div>
    )
}
