import { useEffect, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export const ToDo = () => {

    const [task, setTask] = useState(localStorage.getItem("toDoAppTask") ? JSON.parse(localStorage.getItem("toDoAppTask")):[]);



    const handleFormSubmit = (inputValue)=> {
        const {id, content, isComplete} = inputValue;
        if(!content || content.trim()==="") return;
        const duplicateValue = task.find((item)=> {
            return item.content === content
        });
        if(duplicateValue) return;
        setTask((prev)=> [...prev, inputValue]);
    }

    const handleDeleteTask = (deleteValue)=>{
        console.log(deleteValue);
        const updatedTask = task.filter((item)=>{
            return item.content!==deleteValue;
        });
        setTask(updatedTask);
        console.log(updatedTask);
    }
    const handleCompleteTask = (completedValue)=>{
        console.log(completedValue);
        const updatedTask = task.map((item)=>{
            if(item.content===completedValue){
                return { ...item, isComplete:!item.isComplete }
            }else{
                return item
            }
        });
        setTask(updatedTask);
    }

    useEffect(()=>{
        localStorage.setItem("toDoAppTask", JSON.stringify(task));
    },[task]);


    return (
        <div className="bg-white place-self-center w-11/12 max-w-xl flex flex-col min-h-[550px] rounded-xl p-7">
            {/* -------Title--------- */}
            <div className="flex items-center mt-7 gap-4">
                <img src={todo_icon} alt="todo-icon" className="w-8" />
                <h1 className="text-3xl font-semibold">ToDo App</h1>
            </div>
            {/* -------ToDo Form--------- */}
            <div>
                <ToDoForm onAddTask={handleFormSubmit} />
            </div>
            {/* -------ToDoList--------- */}
            {
                task.map((item, ind)=>{
                    return <ToDoList key={item.id} data={item} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask}/>
                })
            }
            <div className="flex items-center justify-center">
            <button className="mt-12 bg-red-700 w-32 h-10 rounded-full text-white font-semibold cursor-pointer" onClick={()=>setTask([])}>Clear All</button>
            </div>
            
        </div>
    )
}