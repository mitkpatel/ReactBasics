import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
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

  // const handleAction = (todo) => (e) => {
  //   todos = todos.map(t => {
  //     if(t.id == todo.id) {
  //       console.log("current id ", todo.id);
  //       console.log("current status, main todo ", t.completed);
  //       console.log("current status, params todo ", todo.completed);
  //       t.completed = !t.completed;
  //       console.log("target value - ",e.target.value );
  //     }
  //   });

  //   setTodos(todos);    
  // }

  return (
    <div>
      <div className="bg-orange-200 flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-2xl" id="app">
          <h1 className="text-3xl text-center font-bold mb-3 uppercase">
            Todo List From Fetch API
          </h1>
        </div>
        <div>
          <form action="#" className="flex justify-center">
            <input
              className="bg-orange-100 px-3 py-2 rounded-l-full placeholder-orange-400"
              type="text"
              name="todo"
              placeholder="Enter task"
            />
            <button
              className="bg-orange-500 px-5 rounded-r-full text-white"
              type="submit"
              value="+"
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
        </div>
        <div className="bg-white mt-5 p-4 my-4 rounded-lg shadow-lg w-full max-w-3xl overflow-auto">
          <div>
            <h1 className="text-lg font-bold mb-0 leading-none text-gray-800">
              Todo List Details
            </h1>
            <small className="text-sm inline-block mt-0">
            {
              todos.map( (todo) => {
                if (todo.id <= 30) {
                  if (todo.completed) {
                    completedTask += 1;
                  }
                  else {
                    incompletedTask += 1;
                  }
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
                  <th className="text-center py-2 rounded-tl-lg">Number</th>
                  <th className="text-center py-2">Task Details</th>
                  <th className="text-center py-2 rounded-tr-lg">Task status</th>
                </tr>
              </thead>
              <tbody className="mt-1">
                {todos.map((todo) => {
                  if (todo.id <= 30) {
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
                              class="sr-only peer mt-1"
                            />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
