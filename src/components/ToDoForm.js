import React, { useState } from "react";

import MyButton from "./MyButton/button";
import MyInput from "./MyInput/myInput";

import "../App.css";

const ToDoForm = ({ addToDo, setIsModalVisible }) => {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoTask, setToDoTask] = useState("");

    const addNewToDo = (e) => {
        e.preventDefault();
        const newToDo = {
            id: Math.floor(Math.random()*100),
            title: toDoTitle,
            task: toDoTask
        };
        setIsModalVisible(false)
        addToDo(newToDo)
        setToDoTitle('')
        setToDoTask('')
    };

    const onChangeTitle = (e) => {
        setToDoTitle(e.target.value);
    };
    const onChangeTask = (e) => {
        setToDoTask(e.target.value);
    };

    return (
        <form>
            <div>Title<MyInput value={toDoTitle} onChange={onChangeTitle}/></div>
            <div>Task<MyInput value={toDoTask} onChange={onChangeTask} /></div>
            <div>
                <MyButton onClick={addNewToDo}> Add TODO </MyButton>
            </div>
        </form >
    );
};

export default ToDoForm;
