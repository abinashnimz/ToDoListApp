import { useState } from "react";

export const ToDoForm = ({onAddTask})=>{

    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value)=>{    
        setInputValue({
            id:value,
            content:value,
            isComplete:false,
        })
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        onAddTask(inputValue);
        setInputValue({content:""});
    }

    return(<>
        <form onSubmit={(e)=> handleFormSubmit(e)}>
            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input type="text" placeholder="Add your task" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" value={inputValue.content} onChange={(e)=> handleInputChange(e.target.value)}/>
                <button className="border-none rounded-full bg-sky-900 w-32 h-14 text-white text-lg font-medium uppercase cursor-pointer" type="submit">add+</button>
            </div>
        </form>
    </>)
}