import {useState} from 'react'

type TodoProps ={
  text:string,
  id:number
}

export const Todo = ({text,id}:TodoProps) => {
  const [isClicked,setIsClicked] = useState<boolean>();
  const [inputValue,setInputValue] = useState<string>(text);
  return (
    <div className='todo-border' id={id.toString()}>
      <input type="checkbox" name='marked'  /><input type="text" name='todo-text' onFocus={()=>setIsClicked(true)} onBlur={()=>setIsClicked(false)} className='todo-text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  /><button className={isClicked?'save-todo':"save-todo hidden"}>Save</button> <button className='delete-todo' id={id.toString()}>remove</button>
    </div>
  )
}
