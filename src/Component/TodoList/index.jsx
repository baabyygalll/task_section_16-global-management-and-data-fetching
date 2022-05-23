import { useDispatch, useSelector } from "react-redux";
import { delTodo, handleComplete } from "../../Store/Todo";
import "./style.module.css"


const TodoList = (props) => {

     const dataTodos = useSelector((state) => state.todo.value);

     const dispatch = useDispatch();


    return (
      <div className="list">
        <ul>
          {dataTodos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={() => dispatch(handleComplete(todo.id))}
              />
              {todo.completed ? (
                <s>
                  <i>{todo.title}</i>
                </s>
              ) : (
                <span>{todo.title}</span>
              )}
              <button onClick={() => dispatch(delTodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TodoList;