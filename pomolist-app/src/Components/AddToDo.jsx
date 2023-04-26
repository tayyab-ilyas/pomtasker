import React, { useState } from 'react'



export default function AddToDo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Name a task and define it");

        }
        else{
       addTodo(title,desc);
       setTitle("");
       setDesc("");
        }
    }
  return (
    <div className='container my-3'>
        <h3 className="text-2xl font-semibold">Add a task</h3>
        <form onSubmit={submit} className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label htmlFor="title" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Add a task
      </label>
    </div>
    <div className="md:w-2/3">
      <input id="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"   />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label htmlFor="desc" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Task Description
      </label>
    </div>
    <div className="md:w-2/3">
      <input id="desc" type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Add Task
      </button>
    </div>
  </div>
</form>
    </div>
  )
}
