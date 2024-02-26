import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import NoTask from './NoTask'

interface Props{
  todos:Todo[]
  setTodos:React.Dispatch<React.SetStateAction<Todo[]> >
}

const TodoList : React.FC<Props> = ({todos,setTodos}) => {
  
  return (
    <div className='todo_list'>

      {todos.length?todos.map((item,ind)=><SingleTodo todo_={item} todos={todos} setTodos={setTodos}/>):<NoTask/>}

    </div>
  )
}

export default TodoList