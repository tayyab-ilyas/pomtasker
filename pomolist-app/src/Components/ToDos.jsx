import React from 'react'
import ToDoItem from '../Components/ToDoItem'

export default function ToDos(props) {
  return (
    <div className='container min-h-[70vh] m-10'>
        <h3 className="text-2xl font-semibold mb-1 ">Todos List</h3>
        {props.todos.length===0?"You're All Done!":
        
        props.todos.map((todo)=>{
         return(
         <>
          <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        </>
        )
    })
}
    </div>
  )
}
