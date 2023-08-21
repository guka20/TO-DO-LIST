import React,{useEffect, useState} from "react";
import axios from './config/config'
import { Todo } from "./components";
import { TodoProps } from "./props/props";

export const App = () => {
  const [newTodo,setNewTodo] = useState<string>("");
  const [todos,setTodos] = useState<TodoProps[]>([]);
  const fetchData = async()=>{
    const resp = await axios.get("/");
    setTodos(resp.data);
  } 
  const addNewData = async()=>{
    try {
      const resp = await axios.post('/', {
        name: newTodo
      });
      setTodos((prev) => [...prev, resp?.data?.todo]);
      setNewTodo('');
      alert(resp?.data?.message);
    } catch (error:any) {
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

  const deleteFromScreen = (id:number)=>{
    const updatedTodos = todos.filter((todo)=>todo.ID!==id); 
    setTodos(updatedTodos)
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="main">
      <h1>My Todos</h1>
      <div className="container">
        <input
          type="text"
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
          placeholder="Ask something to do"
          className="input"
        />
        <button className="save-btn" onClick={addNewData}>Save</button>
      </div>
      <div className="todos"> 
      {
        todos.length===0?<h1>There is no any todos</h1>:
        todos?.map((todo)=><Todo text={todo?.Name} id={todo?.ID} key={todo?.ID} deleteFromScreen={deleteFromScreen}/>)
      }
      </div>
    </div>
  );
};
