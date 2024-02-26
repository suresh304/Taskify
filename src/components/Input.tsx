import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}
const Input: React.FC<Props> = ({ todo, setTodo,handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        className="input_box"
        type="text"
        placeholder="enter the task"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />

      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default Input;
