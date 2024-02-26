import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Todo } from "../model";
import { MdDone, MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
interface Props {
  todo_: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo_, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const { id, todo, isDone } = todo_;
  const doneHandler = (id: number) => {
    setTodos(
      todos.map((todo, ind) =>
        todo.id === id ? { ...todo, isDone: !isDone } : todo
      )
    );
  };
  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo, ind) => todo.id !== id));
  };
  const editHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    // if(e.target.value)
    
    setTodos(
      todos.map((todo, ind) =>
        todo.id === id ? { ...todo, todo: e.target.value } : todo
      )
    );
    
  };
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <form className="single_todo" onSubmit={(e) => submitHandler(e)}>
      {isDone ? (
        <span>
          <s>{todo}</s>
        </span>
      ) : edit ? (
        <span><input
        className="single_todo--input"
          placeholder=""
          defaultValue={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            editHandler(e, id)
          }
          autoFocus
        />
        </span>
      ) : (
        <span>{todo}</span>
      )}
      <div className="todo_options">
        <MdDone className= "icon"onClick={() => doneHandler(id)} />
        <RiEditFill className= "icon"onClick={() => setEdit(!edit)} />
        <MdDelete className= "icon"onClick={() => deleteHandler(id)} />
      </div>
    </form>
  );
};

export default SingleTodo;
