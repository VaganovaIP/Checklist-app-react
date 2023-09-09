
import React, { useState } from "react"
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'


function Todolist({todo,  setTodo}){
    const [value, setValue] = useState('')

    function addTodo(){
        setTodo(
            [
            ...todo, {
                id: uuid(),
                title:value,
                status:true
            }
        ])
        setValue('')
    }

    return(
        <div className = "input-wrapper">
            <h1>Чеклист</h1>
            <input 
                type = "text"
                name="todo"
                value={value}
                placeholder=""
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            /> 
            <button className="add-button" onClick={addTodo}> <FontAwesomeIcon icon={faAdd}/></button>
        </div>
    )
        

}



export default Todolist


