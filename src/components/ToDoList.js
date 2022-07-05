import ToDo from './ToDo'

const ToDoList =({todos, remove })=>{
    return (
    <div>
         {todos.map((todo) => {
        return <ToDo todo={todo} key={todo.id} remove={remove}  />;
      })}
    </div>
    )
}
export  default ToDoList