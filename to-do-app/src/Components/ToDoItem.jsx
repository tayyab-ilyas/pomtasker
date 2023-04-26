import React from 'react'
import{ useState } from 'react'


export default function ToDoItem({todo, onDelete}) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-1">{todo.title}</h4>
      <p className='text-sm mb-1'>{todo.desc}</p>
      <button className="bg-red-600 text-white text-sm font-mono p-2 rounded-xl" key={todo.sno} onClick={ ()=>(onDelete(todo))}>Delete</button>
    </div>
  )
}
