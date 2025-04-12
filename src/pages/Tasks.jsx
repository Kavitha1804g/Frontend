// import { useState, useEffect } from 'react';
// import { FiPlus, FiCheck, FiEdit, FiTrash } from 'react-icons/fi';
// import { v4 as uuidv4 } from 'uuid';

// const generateMockTasks = (num) => {
//   const users = ['John D.', 'Sarah M.', 'Emma R.', 'Mark T.', 'Daniel K.', 'Alice B.', 'Robert C.', 'Lucy W.', 'Tom P.', 'Sophia L.'];
//   const projects = ['Website Redesign', 'Mobile App Development', 'Marketing Campaign', 'E-commerce Integration', 'Data Migration'];
//   const statuses = ['Not Started', 'In Progress', 'Pending', 'In Review', 'Completed'];
//   const priorities = ['Low', 'Medium', 'High'];

//   return Array.from({ length: num }, (_, i) => ({
//     id: uuidv4(),
//     title: `Task ${i + 1}`,
//     project: projects[i % projects.length],
//     assignee: users[i % users.length],
//     dueDate: `2024-03-${(i % 30) + 1}`,
//     priority: priorities[i % priorities.length],
//     status: statuses[i % statuses.length]
//   }));
// };

// function Tasks() {
//   const [tasks, setTasks] = useState(generateMockTasks(50));
//   const [showNewTask, setShowNewTask] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     project: '',
//     assignee: '',
//     dueDate: '',
//     priority: 'Medium',
//     status: 'Not Started'
//   });
//   const [editingTask, setEditingTask] = useState(null);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects([...new Set(tasks.map(task => task.project))]);
//   }, [tasks]);

//   const handleCreateTask = (e) => {
//     e.preventDefault();
//     setTasks(prevTasks => {
//       const updatedTasks = [...prevTasks, { id: uuidv4(), ...newTask, title: `Task ${prevTasks.length + 1}` }];
//       return updatedTasks;
//     });
//     setShowNewTask(false);
//     setNewTask({ title: '', project: '', assignee: '', dueDate: '', priority: 'Medium', status: 'Not Started' });
//   };

//   const handleEditTask = (task) => {
//     setEditingTask(task);
//   };

//   const handleUpdateTask = (e) => {
//     e.preventDefault();
//     setTasks(tasks.map(task => task.id === editingTask.id ? editingTask : task));
//     setEditingTask(null);
//   };

//   const handleDeleteTask = (id) => {
//     setTasks(prevTasks => prevTasks.filter(task => task.id !== id).map((task, index) => ({ ...task, title: `Task ${index + 1}` })));
//   };

//   const handleDeleteProject = (projectName) => {
//     setTasks(prevTasks => {
//       const updatedTasks = prevTasks.filter(task => task.project !== projectName).map((task, index) => ({ ...task, title: `Task ${index + 1}` }));
//       setProjects([...new Set(updatedTasks.map(task => task.project))]);
//       return updatedTasks;
//     });
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority.toLowerCase()) {
//       case 'high': return 'text-red-500';
//       case 'medium': return 'text-yellow-500';
//       case 'low': return 'text-green-500';
//       default: return 'text-gray-600';
//     }
//   };

//   return (
//     <div className="space-y-6 p-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Tasks ({tasks.length})</h2>
//         <button className="btn btn-primary flex items-center" onClick={() => setShowNewTask(true)}>
//           <FiPlus className="mr-2" /> New Task
//         </button>
//       </div>

//       {showNewTask && (
//         <div className="card p-4">
//           <h3 className="text-lg font-semibold mb-4">Create New Task</h3>
//           <form onSubmit={handleCreateTask} className="space-y-4">
//             <input type="text" placeholder="Task Title" className="input w-full" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} required />
//             <input type="text" placeholder="Project" className="input w-full" value={newTask.project} onChange={(e) => setNewTask({ ...newTask, project: e.target.value })} required />
//             <input type="text" placeholder="Assignee" className="input w-full" value={newTask.assignee} onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })} required />
//             <input type="date" className="input w-full" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} required />
//             <select className="input w-full" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//             <div className="flex justify-end space-x-2">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowNewTask(false)}>Cancel</button>
//               <button type="submit" className="btn btn-primary">Create Task</button>
//             </div>
//           </form>
//         </div>
//       )}

//       <div className="card p-4 overflow-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="text-left py-3 px-4">Title</th>
//               <th className="text-left py-3 px-4">Project</th>
//               <th className="text-left py-3 px-4">Assignee</th>
//               <th className="text-left py-3 px-4">Due Date</th>
//               <th className="text-left py-3 px-4">Priority</th>
//               <th className="text-left py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.id} className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4">{task.title}</td>
//                 <td className="py-3 px-4">{task.project}</td>
//                 <td className="py-3 px-4">{task.assignee}</td>
//                 <td className="py-3 px-4">{task.dueDate}</td>
//                 <td className="py-3 px-4"><span className={`font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span></td>
//                 <td className="py-3 px-4 flex space-x-2">
//                   <button className="p-2 hover:bg-gray-100 rounded text-blue-500" onClick={() => handleEditTask(task)}>
//                     <FiEdit className="w-4 h-4" />
//                   </button>
//                   <button className="p-2 hover:bg-gray-100 rounded text-red-500" onClick={() => handleDeleteTask(task.id)}>
//                     <FiTrash className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Tasks;
import { useState, useEffect } from "react";
import axios from "axios";
import { FiPlus, FiEdit, FiTrash } from "react-icons/fi";

const API_URL = "http://localhost:5001/tasks"; // Backend API URL

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showNewTask, setShowNewTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    project: "",
    assignee: "",
    dueDate: "",
    priority: "Medium",
    status: "Not Started",
  });
  const [editingTask, setEditingTask] = useState(null);

  // Fetch Tasks from Backend
 
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL);
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
  
    fetchTasks(); // Fetch tasks on component load
  }, []);
  
  // Create or Update Task
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (editingTask) {
            // 🛠 Update existing task
            const res = await axios.put(`${API_URL}/${editingTask.id}`, newTask);

            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === editingTask.id ? { ...task, ...newTask } : task
                )
            );
        } else {
            // ➕ Create new task
            const res = await axios.post(API_URL, newTask);
            setTasks([...tasks, res.data]);
        }

        setShowNewTask(false);
        setEditingTask(null);
        setNewTask({ title: "", project: "", assignee: "", dueDate: "", priority: "Medium", status: "Not Started" });

    } catch (error) {
        console.error("Error saving task:", error);
    }
};


  // Delete Task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Edit Task
  const handleEdit = (task) => {
    setEditingTask(task);
    setNewTask({ ...task });
    setShowNewTask(true);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
        <button className="btn btn-primary flex items-center" onClick={() => setShowNewTask(true)}>
          <FiPlus className="mr-2" /> {editingTask ? "Edit Task" : "New Task"}
        </button>
      </div>

      {showNewTask && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Task Title" className="input w-full" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} required />
          <input type="text" placeholder="Project" className="input w-full" value={newTask.project} onChange={(e) => setNewTask({ ...newTask, project: e.target.value })} required />
          <input type="text" placeholder="Assignee" className="input w-full" value={newTask.assignee} onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })} required />
          <input type="date" className="input w-full" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} required />
          <select className="input w-full" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button type="button" className="btn btn-secondary" onClick={() => setShowNewTask(false)}>Cancel</button>
            <button type="submit" className="btn btn-primary">{editingTask ? "Update Task" : "Create Task"}</button>
          </div>
        </form>
      )}

      <div className="card p-4 overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Project</th>
              <th className="text-left py-3 px-4">Assignee</th>
              <th className="text-left py-3 px-4">Due Date</th>
              <th className="text-left py-3 px-4">Priority</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{task.title}</td>
                <td className="py-3 px-4">{task.project}</td>
                <td className="py-3 px-4">{task.assignee}</td>
                <td className="py-3 px-4">{task.dueDate}</td>
                <td className="py-3 px-4">{task.priority}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded text-blue-500" onClick={() => handleEdit(task)}>
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded text-red-500" onClick={() => handleDelete(task.id)}>
                    <FiTrash className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
