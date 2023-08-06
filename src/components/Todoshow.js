import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faAdd, faTrash, faPen, faSave, faPenSquare } from '@fortawesome/free-solid-svg-icons'

function Todoshow({todo, setTodo}){

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }   

    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id){
        let newTodo = [...todo].map(item => {
            if(item.id == id)
               {item.title = value} 
            return item    
        })
        setTodo(newTodo)
        setEdit(null)
    } 
    
    function checkTodo(id){
        let newTodo = [...todo].map(item => {
            if(item.id == id)
               {item.status = !item.status} 
            return item    
        })
        setTodo(newTodo)
        setEdit(null)
        console.log(todo)
    }
    
    return(
        <div className="todo-list">
             <ul className=""> 
                 { React.Children.toArray(todo.map(item => (
                    <div key = {item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input className = "edit-input" value={value} onChange={(e) => setValue(e.target.value) }/>
                                </div> :
                                <div > </div>
                        }
                    {
                        edit === item.id ?
                        <div>
                            <button className="save" onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave}/></button>
                        </div>:  
                        <div className="todo"> 
                           {
                                item.status !== true ? 
                                    <li> <strike>{item.title} </strike></li> : 
                                        <li > {item.title} </li>
                           } 
                            <button className="delete-button"
                                    onClick={()=>deleteTodo(item.id)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                            </button>
                            <button className="edit-button"
                                    onClick={() => editTodo(item.id, item.title)}>
                                    <FontAwesomeIcon icon={faPenSquare}/>
                            </button>
                            <button className="check-button"
                                    onClick={()=>checkTodo(item.id)}>
                                    <FontAwesomeIcon icon={faCheck}/>
                            </button>
                        </div>
                    }
                    </div>
                    
                 )))
               }  </ul>  
        </div>
    )
}

export default Todoshow;