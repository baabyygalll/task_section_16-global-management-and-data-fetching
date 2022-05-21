import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/Todo";
// Style
import "./style.module.css";



const Form = () => {


    const [inputTodo, setInputTodo] = useState({value:""});

    const dispatch = useDispatch();



     const handleSubmit = (e) => {
         
       if (inputTodo.value === "") {
         alert("Insert a new to do list!");
       } else {
         dispatch(
           addTodo({
             title: inputTodo.value,
             completed: false,
           })
         );
       }
       e.preventDefault();
     };


    

    const handleInputTodo = (event) => {
                setInputTodo({value: event.target.value})

    }

    return (
        <form onSubmit={handleSubmit}>
           <div>
               <input onChange={(event)=>handleInputTodo(event)} placeholder="Add to do..."  value={inputTodo.value} type="text"></input>
               <button type="submit">Submit</button>
           </div>
        </form>
    )

}

export default Form;