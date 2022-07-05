import React from "react";
import "./ToDo.css";
import MyButton from "./MyButton/button";

const ToDo = ({ todo, ...props }) => {
  


  return (
    <div className="todo">
      <div className="todo-content">        
        <div> <span className="bold-text">No.:</span> {todo.id}</div>
        <div> <span className="bold-text">Title:</span> {todo.title} </div>
        <div> <span className="bold-text">Task:</span> {todo.task} </div>
      </div>
      <div className="todo-btn">
         
         <MyButton onClick={()=>{props.remove(todo)}}>Delete</MyButton>
      </div>
    </div>
  );
};

export default ToDo;
