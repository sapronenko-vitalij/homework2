import React, { useState } from "react";

import ToDoForm from "./ToDoForm";

import ToDoList from "./ToDoList";
import Modal from "./Modal/modal";
import MyButton from './MyButton/button';
import './Main.css';

const toDoArray = [];

const Main = (props) => {
 
  const [todos, setToDos] = useState(toDoArray);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const addToDo = (newToDo) => {
    setToDos([...todos, newToDo]);
  };
  const remove=(todo)=>{  
    const newToDos=[...todos].filter(p=>p.id !== todo.id);
    setToDos(newToDos)
   }


  

    return(
      <div className="main">
        <div>
       {todos.length ?
       <ToDoList todos={todos} remove={remove} />
       :<div className="noToDo">
         <h2>Keep calm. There is nothing to do.</h2>
       </div>
       } 
       <MyButton onClick={() => setIsModalVisible(true)}>Add ToDo</MyButton>
        <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} >
        <ToDoForm addToDo={addToDo} setIsModalVisible={setIsModalVisible} todos={todos} />
        </Modal>
      
      
        </div>       
        
      </div>
    )
  }

  export default Main