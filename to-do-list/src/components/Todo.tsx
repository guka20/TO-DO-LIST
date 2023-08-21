import { useState } from "react";
import axios from '../config/config'
type TodoProps = {
  text: string;
  id: number;
  deleteFromScreen:(id:number)=>void;
};

export const Todo = ({ text, id,deleteFromScreen }: TodoProps) => {
  const [isClicked, setIsClicked] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>(text);

  const updateTodo = async()=>{ 
    setIsClicked(false)
    try{
      const resp = await axios.patch(`/${id}`,{name:inputValue})
      alert(resp.data.message)
    }catch (error:any) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        alert(errorMessage)
      } else if (error.request) {
        console.error('No response received');
      } else {
        console.error('Request error:', error.message);
      }
    }  

    
  }
  const deleteTodo = async () => {
    const resp =await axios.delete(`/${id}`);
    deleteFromScreen(id);
    alert(resp?.data?.message)
  };
  return (
    <div className="todo-border" id={id?.toString()}>
      <input type="checkbox" name="marked" />
      <input
        type="text"
        name="todo-text"
        onFocus={() => setIsClicked(true)}
        onBlur={() => text===inputValue&&setIsClicked(false)}
        className="todo-text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={isClicked ? "save-todo" : "save-todo hidden"} onClick={updateTodo}>
        Save
      </button>
      <button className="delete-todo"  onClick={deleteTodo}>
        remove
      </button>
    </div>
  );
};
