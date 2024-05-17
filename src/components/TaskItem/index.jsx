import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function TaskItem(){
    return(
        <>
            <FaCheckCircle />
            <FaRegCircle />
            <p>Lavar la ropa</p>
            <FaRegTrashAlt />
        </>
        
        
        
    )
}

export {TaskItem};