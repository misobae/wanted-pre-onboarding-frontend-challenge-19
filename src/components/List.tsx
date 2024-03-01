import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteTodo } from "../store/todoSlice";

function List(){
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  }

  return (
    <ul className="mt-10">
      {todos?.map((toDo) => (
        <li
          key={toDo.id}
          className="flex"
        >
          <div className="flex-1 ">{toDo.text}</div>
          <button
            onClick={() => handleDelete(toDo.id)}
            type="button"
            className="px-5 font-semibold"
          >
              x
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List;