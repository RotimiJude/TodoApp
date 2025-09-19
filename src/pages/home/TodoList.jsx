import { useFirestore } from "../../hooks/useFirestore"

export default function TodoList({todolist}) {
    const {deleteDocument,response}= useFirestore('todolist') 
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    {todolist.map((todo) => (
      <li 
        key={todo.id} 
        className="p-4 border rounded-xl shadow-xl bg-gray-200 flex flex-col justify-between hover:shadow-lg transition"
      >
        {/* Title + Priority + Category */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{todo.title}</h3>
          <div className="flex gap-3 text-sm text-gray-500">
            <span>{todo.priority}</span>
            <span>{todo.category}</span>
          </div>
        </div>
  
        {/* Description */}
        <p className="mt-2 text-sm ">{todo.description}</p>
  
        {/* Date */}
        <p className="mt-2 text-xs text-gray-500">Due: {todo.date}</p>
  
        {/* Delete button at bottom */}
        <button 
          onClick={() => deleteDocument(todo.id)} 
          className="mt-4 px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 self-start"
        >
          Delete
        </button>
      </li>
    ))}      
  </ul>
  
  )
}
