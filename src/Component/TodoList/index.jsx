import { useDispatch, useSelector } from "react-redux";
import { delTodo } from "../../Store/Todo";
import "./style.module.css"


const TodoList = (props) => {

     const dataTodos = useSelector((state) => state.todo.value);

     const dispatch = useDispatch();

     const onChange = (id) => {
       return (e) => {
         props.onChecked(id, e.target.checked);
       };
     };
 

    return (
       <div className="list">
           <ul>
              { dataTodos.map((todo) => 
                   { 
                      return (
                        <ul
                          key={todo.id}
                          style={{
                            textDecoration: todo.completed
                              ? "line-through"
                              : "none",
                            fontStyle: todo.completed ? "italic" : "normal",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={onChange(todo.id)}
                          />

                          {todo.title}

                          <button onClick={() => dispatch(delTodo(todo.id))}>
                            Delete
                          </button>
                        </ul>
                      );  })
              }
             </ul>
       </div>
    
    
    )
}

export default TodoList;