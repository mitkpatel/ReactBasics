import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [message, setMessage] = useState('');
  let completedTask = 0;
  let incompletedTask = 0;

  useEffect(() => {
    console.log("Use effect called");
    requestTodos();
  }, []);

  async function requestTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonRes = await res.json();
    setTodos(jsonRes);
    console.log(jsonRes);
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log("todo value", todo);
    if(todo.length > 0) {
      todos.map(t => {
        if(t.title == todo) {
          setMessage("The task is already there in todo list at task id " + t.id);
        }
      });
      setTodos([...todos, {"id": todos.length + 1, "title": todo, "completed": false }]);
      setTodo('');
      setMessage('');
    }
    else {
      setMessage("Please enter valid todo first!");
    }
  }

  const handleAction = (todo) => {
    const newTodo = todos.map(t => {
      if (todo.id == t.id) {
        return {...todo, completed: !todo.completed}
      }
      else {
        return t;
      }
    });
    setTodos(newTodo);
  }

  const handleDelete = (todo) => {
    console.log("old todo", todo);
    const newTodo = todos.map(t => {
      return t.id == todo.id ? {} : {...t}
    });

    setTodos(newTodo);
    console.log("new todo", todos); 
  }

  return (
    <div>
      <div className="bg-orange-200 flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-2xl" id="app">
          <h1 className="text-3xl text-center font-bold mb-3 uppercase">
            Todo List From Fetch API
          </h1>
        </div>
        <div>
          <form className="flex justify-center">
            <input
              className="bg-orange-100 px-3 py-2 rounded-l-full placeholder-orange-400"
              type="text"
              name="todo"
              placeholder="Enter task"
              value={todo}
              onChange={(e) => {setTodo(e.target.value);}}
            />
            <button
              className="bg-orange-500 px-5 rounded-r-full text-white"
              type="submit"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </form>
          <p className={message.length ? "mt-3 p-1 bg-red-600 font-semibold text-orange-50 rounded-md" : "none"}>{message}</p>
        </div>
        <div className="bg-white mt-5 p-4 my-4 rounded-lg shadow-lg w-full max-w-3xl overflow-auto">
          <div>
            <h1 className="text-lg font-bold mb-0 leading-none text-gray-800">
              Todo List Details
            </h1>
            <small className="text-sm inline-block mt-0">
            {
              todos.map( (todo) => {
                if (todo.completed) {
                    completedTask += 1;
                  }
                  else {
                    incompletedTask += 1;
                  }
              })
            }
            <b>{incompletedTask}</b> todos pending, <b>{completedTask}</b> completed
            </small>
           
          </div>
          <div className="flex justify-center mt-3">
            <table className="w-full">
            <thead>
                <tr className="bg-orange-500 text-orange-50">
                  <th className="text-center p-3 rounded-tl-lg">Number</th>
                  <th className="text-center  p-3">Task Details</th>
                  <th className="text-center truncate p-3">Task status</th>
                  <th className="text-center p-3 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody className="mt-1">
                {todos.map((todo) => {
                  if (todo.id != null)
                    return (
                        <tr className="odd: bg-orange-100 even:bg-orange-50">
                          <td>{todo.id}</td>
                          <td>
                            <p className={todo.completed ? 'line-through' : 'no-underline'}>{todo.title}</p>
                          </td>
                          <td>
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => {handleAction(todo)}}
                                class="sr-only peer mt-1"
                              />
                              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            </label>
                          </td>
                          <td>
                            <button
                              className="text-orange-600"
                              onClick={() => {handleDelete(todo)}}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                            </td>
                        </tr>
                      );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
