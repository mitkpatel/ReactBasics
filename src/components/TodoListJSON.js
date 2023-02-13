import { useState } from "react";

export default function TodoListJSON({
  data,
  handleToggle,
  handleDelete,
  handleAdd,
}) {
  const [addTodo, setAddTodo] = useState("");
  let completedTask = 0;
  let incompletedTask = 0;

  const handleChange = (event) => {
    setAddTodo({
      userId: 1,
      id: data.length + 1,
      title: event.target.value,
      completed: false,
    });
    console.log("new todo", addTodo);
  };

  return (
    <div>
      <div className="bg-orange-200 flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-2xl" id="app">
          <h1 className="text-3xl text-center font-bold mb-3 uppercase">
            Todo List From JSON Data
          </h1>
        </div>
        <div>
          <div className="flex justify-center">
            <input
              className="bg-orange-100 px-3 py-2 rounded-l-full placeholder-orange-400"
              type="text"
              name="todo"
              placeholder="Enter new task"
              onChange={handleChange}
            />
            <button
              className="bg-orange-500 px-5 rounded-r-full text-white"
              value="+"
              onClick={handleAdd(addTodo)}
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
          </div>
        </div>
        <div className="bg-white mt-5 p-4 my-4 rounded-lg shadow-lg w-full max-w-3xl overflow-auto">
          <div>
            <h1 className="text-lg font-bold mb-0 leading-none text-gray-800">
              Todo List Details
            </h1>
            <small className="text-sm inline-block mt-0">
              {data.map((todo) => () => { 
                if (todo.completed) {
                  completedTask += 1;
                } else {
                  incompletedTask += 1;
                }
              })}
              <b>{incompletedTask}</b> todos pending, <b>{completedTask}</b>{" "}
              completed
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
                {data.map((todo) => () => {
                  if (todo.id != null)
                    return (
                      <tr className="odd: bg-orange-100 even:bg-orange-50">
                        <td>{todo.id}</td>
                        <td>
                          <p
                            className={
                              todo.completed ? "line-through text-left" : "no-underline text-left"
                            }
                          >
                            {todo.title}
                          </p>
                        </td>
                        <td>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              name="completed"
                              type="checkbox"
                              checked={todo.completed}
                              onChange={handleToggle(todo)}
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            />
                          </label>
                        </td>
                        <td>
                          <button
                            className="text-orange-600"
                            onClick={handleDelete(todo)}
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
