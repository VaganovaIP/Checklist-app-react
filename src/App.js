import './App.css';
import React, { useState } from 'react';
import Todolist from "./components/Todolist"
import Todoshow from './components/Todoshow';


function App(){
    const [todo, setTodo] = useState([])

    return(

        <div className='App'>
            
            <Todolist todo ={todo} setTodo={setTodo} />
            <Todoshow todo = {todo} setTodo={setTodo}/>  
        </div>
        
    );


}
export default App;
