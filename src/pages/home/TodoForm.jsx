import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export default function TodoForm({uid}) {
    const [title, setTitle] = useState('')
    const [description, setDescription]= useState('')
    const [date, setDate] = useState('')
    const [priority, setPriority] = useState('medium')
    const [category, setCategory] = useState('personal')
    const {addDocument, response} = useFirestore('todolist')
    const handleSubmit = (e) =>{
        e.preventDefault()
        addDocument({
            uid,
            title,
            description,
            date,
            priority,
            category

        })
    }
    //reset the form fields
    useEffect(() => {
        if(response.success){
            setTitle('')
            setDescription('')
            setDate('')
            setPriority('')
            setCategory('')
        }
    },[response.success])

    // Helper to get color for flag
    const getPriorityColor = (level) => {
        switch(level){
            case 'high': return 'bg-red-500';
            case 'medium': return 'bg-yellow-400';
            case 'low': return 'bg-green-500';
            default: return 'bg-gray-400';
        }
    }
  return (
    <>
    <div className="flex flex-col items-center">
    <h3 className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-extrabold tracking-widest">Create a Todo</h3>

    </div>
    
    <form 
  onSubmit={handleSubmit} 
  className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
>
  {/* Title */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
    <input 
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
      required
    />
  </div>

  {/* Description */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
    <input 
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />
  </div>

  {/* Date */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Date*</label>
    <input 
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
      required
    />
  </div>

  {/* Priority */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
    <div className="flex items-center gap-2">
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
        required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <span
        className={`${getPriorityColor(priority)} w-4 h-4 rounded-full border`}
        title={priority}
      ></span>
    </div>
  </div>

  {/* Category */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
      required
    >
      <option value="Personal">Personal</option>
      <option value="Work">Work</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Submit Button */}
  <button 
    type="submit"
    className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
  >
    Create Todo
  </button>
</form>


 
    </>
  )
}
