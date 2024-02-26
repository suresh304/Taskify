import React, { useState } from "react";
import {FC} from "react";

import "./App.css";
import Input from "./components/Input";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

 const App : FC =()=>{
const [todo,setTodo] = useState<string>("")
const [todos,setTodos] = useState<Todo[]>([])
const handleAdd = (e:React.FormEvent)=>{
  e.preventDefault()
  if(todo){
    setTodos([...todos,{id: Date.now(),todo,isDone:false}])
    setTodo("")
  }

}
  return <div className="app">
    <div className="heading">
      Taskify
      
    </div>
    <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    
  </div>
 }
export default App;
