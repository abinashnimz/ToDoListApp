import icon_tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import del_icon from "../assets/delete.png";

export const ToDoList = ({data, onDeleteTask, onCompleteTask})=>{
    return(
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1 gap-2 items-center cursor-pointer" onClick={()=>onCompleteTask(data.id)}>
                <img src={data.isComplete?icon_tick:not_tick} alt="tick-icon" className="w-7"/>
                <p className={`text-slate-700 text-[17px] ${data.isComplete?"line-through":""}`}>{data.content}</p>
            </div>
            <img src={del_icon} alt="delete-icon" className="w-3.5 cursor-pointer" onClick={()=>onDeleteTask(data.id)}/>
        </div>
    )
}