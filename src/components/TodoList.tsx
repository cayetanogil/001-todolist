import { useState } from 'react';

const TodoList = () => {
  const [todoItem, setTodoItem] = useState<Todo>({ text: '', done: false });
  const [todoList, setTodoList] = useState<Todo[]>([]);

  interface Todo {
    text: string;
    done: boolean;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem({ text: event.target.value, done: false });
  };

  const handleAddTodo = () => {
    if (!todoItem.text) return;
    const tempTodoList: Todo[] = [...todoList, todoItem];
    setTodoList(tempTodoList);
    setTodoItem({ text: '', done: false });
  };

  return (
    <div className="flex flex-grow flex-col bg-slate-100 p-4">
      <div className="flex flex-row gap-2">
        <input
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo();
            }
          }}
          value={todoItem.text}
          className="flex-grow p-2"
        ></input>
        <button
          onClick={handleAddTodo}
          className="cursor-pointer bg-slate-300 px-4 py-2 text-sm"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 h-0 flex-grow overflow-y-scroll">
        {todoList &&
          todoList.map((todo, index) => (
            <li
              key={index}
              className={`flex flex-row gap-2 border-b border-slate-200 bg-white p-4`}
            >
              <input type="checkbox" className="cursor-pointer"></input>
              <p>{todo.text}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
