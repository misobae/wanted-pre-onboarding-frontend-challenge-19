import { useForm } from "react-hook-form";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

interface IForm {
  toDo: string;
}

function CreateForm(){
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const dispatch = useDispatch();

  const handleValid = ({ toDo }: IForm) => {
    dispatch(addTodo(toDo));
    setValue("toDo", "");
  }

  return (
    <form
      className="flex gap-2"
      onSubmit={handleSubmit(handleValid)}
    >
      <input {...register("toDo", {
          required: "Please write a todo",
        })}
        type="text" 
        className="flex-1 h-10 px-5 border-b"
        placeholder="Write a to do"
      />
      <button
        type="button"
        className="h-10 px-5 font-semibold rounded-md border border-slate-200"
        onClick={handleSubmit(handleValid)}
      >
          +
      </button>
    </form>
  )
}

export default CreateForm;