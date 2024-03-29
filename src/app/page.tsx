"use client"

import { useState } from "react";
import {TodoItem} from "@/types/TodoItem";


const Page = () => {

  const [inputList, setInputList]= useState('');
  const [list, setList]= useState<TodoItem[]>([
    {id:1 ,label: 'To make cake', checked :false    },
    {id:2, label: 'To make coffe', checked :false   }
  ]);

    const addTodo= () =>{
      if(inputList.trim() ==='') return;
      const lastId = list.length > 0 ? list[list.length - 1].id : 0;
      setList([...list, {id: lastId+1, label: inputList , checked : false}]);
      setInputList('');
    }

    const  deleteItem = (id :number) =>{
      setList(  list.filter((item)=> item.id !== id))};

    const toogleItem= (id: number)=> {

      let newList= [...list];
      
      let i;
      for(i = 0; id!= newList[i].id; i++);
        newList[i].checked = !newList[i].checked;
      
      setList(newList);
    }  

  return(
    <div className="w-screen h-screen flex  flex-col items-center ">
      <h1 className="text-4xl  mt-5 ">To do </h1>
      <div className="flex w-full  max-w-lg  my-3 p-3  rounded-md  bg-gray-700 border-2 border-gray-700">
        
        <input type="text"
         placeholder="What would you like to do?" 
         className="flex-1 border border-black p-3 text-1xl text-black rounded-md mr-3  " 
         value={inputList}
         onChange={e => {setInputList(e.target.value)}}
         />
         <button onClick={addTodo}>Adicionar</button>
      </div>
      

      <ul className="w-full max-w-lg list-disc pl-2">
        {list.map(
          (item) => (
             <li className="list-none text-wrap flex flex-row flex-wrap"> 
             <input className="w-4 h-4 mr-2 p-3 m-1 " 
             onClick={e => toogleItem(item.id) } 
             type="checkbox" aria-label="label" 
             checked={item.checked} /> {item.label}  
              <button onClick={()=>deleteItem(item.id)} className=""> <img className="w-4 h-4 ml-2  " src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="DELETE" />
                </button> </li>)
        )}
      </ul>
    </div>
  );
}

export default Page;