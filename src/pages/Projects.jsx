// import { useState, useEffect } from "react";
// import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

// function Projects() {
//   // Retrieve stored projects or use an empty array
//   const getStoredProjects = () => {
//     const savedProjects = localStorage.getItem("projects");
//     return savedProjects ? JSON.parse(savedProjects) : [];
//   };

//   const [projects, setProjects] = useState(getStoredProjects);
//   const [showNewProject, setShowNewProject] = useState(false);
//   const [editProject, setEditProject] = useState(null);
//   const [newProject, setNewProject] = useState({ name: "", description: "", team: [] });

//   // Save projects to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("projects", JSON.stringify(projects));
//   }, [projects]);

//   // Function to calculate progress: Every project starts at 10%, +10% per team member (max 100%)
//   const calculateProgress = (team) => {
//     const baseProgress = 10; // Every project starts at 10%
//     const teamProgress = (team.length || 0) * 10; // 10% per team member
//     return Math.min(100, baseProgress + teamProgress); // Cap at 100%
//   };

//   // Handle project creation or update
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const calculatedProgress = calculateProgress(newProject.team);

//     if (editProject) {
//       setProjects((prevProjects) =>
//         prevProjects.map((p) =>
//           p.id === editProject.id ? { ...editProject, progress: calculatedProgress } : p
//         )
//       );
//       setEditProject(null);
//     } else {
//       setProjects((prevProjects) => [
//         ...prevProjects,
//         { id: Date.now(), ...newProject, progress: calculatedProgress, status: "Not Started" },
//       ]);
//     }

//     setShowNewProject(false);
//     setNewProject({ name: "", description: "", team: [] });
//   };

//   // Handle project deletion
//   const handleDelete = (id) => {
//     setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
//   };

//   // Handle project edit
//   const handleEdit = (project) => {
//     setEditProject(project);
//     setNewProject({ ...project });
//     setShowNewProject(true);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//         <button className="btn btn-primary flex items-center" onClick={() => setShowNewProject(true)}>
//           <FiPlus className="mr-2" /> {editProject ? "Edit Project" : "New Project"}
//         </button>
//       </div>

//       {showNewProject && (
//         <div className="card">
//           <h3 className="text-lg font-semibold mb-4">{editProject ? "Edit Project" : "Create New Project"}</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Project Name</label>
//               <input
//                 type="text"
//                 className="input mt-1 w-full"
//                 value={newProject.name}
//                 onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Description</label>
//               <textarea
//                 className="input mt-1 w-full"
//                 value={newProject.description}
//                 onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Team Members (comma-separated)</label>
//               <input
//                 type="text"
//                 className="input mt-1 w-full"
//                 value={newProject.team.join(", ")}
//                 onChange={(e) =>
//                   setNewProject({ ...newProject, team: e.target.value.split(",").map((t) => t.trim()) })
//                 }
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowNewProject(false)}>
//                 Cancel
//               </button>
//               <button type="submit" className="btn btn-primary">
//                 {editProject ? "Update Project" : "Create Project"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="card">
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg font-semibold">{project.name}</h3>
//               <div className="flex space-x-2">
//                 <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleEdit(project)}>
//                   <FiEdit2 className="w-4 h-4" />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded text-danger" onClick={() => handleDelete(project.id)}>
//                   <FiTrash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-600 mt-2">{project.description}</p>
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 mb-1">
//                 <span>Progress</span>
//                 <span>{project.progress}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-primary rounded-full h-2" style={{ width: `${project.progress}%` }} />
//               </div>
//             </div>
//             <div className="mt-4">
//               <p className="text-sm text-gray-600">Team Members:</p>
//               <div className="flex mt-2">
//                 {project.team.length > 0 ? (
//                   project.team.map((member, index) => (
//                     <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm mr-2">
//                       {member}
//                     </div>
//                   ))
//                 ) : (
//                   <span className="text-gray-500 text-sm">No team members assigned</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
// import { useState, useEffect } from "react";
// import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

// function Projects() {
//   // Retrieve stored projects or use an empty array
//   const getStoredProjects = () => {
//     const savedProjects = localStorage.getItem("projects");
//     return savedProjects ? JSON.parse(savedProjects) : [];
//   };

//   const [projects, setProjects] = useState(getStoredProjects);
//   const [showNewProject, setShowNewProject] = useState(false);
//   const [editProject, setEditProject] = useState(null);
//   const [newProject, setNewProject] = useState({ name: "", description: "", team: [] });

//   // Save projects to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("projects", JSON.stringify(projects));
//   }, [projects]);

//   // Function to calculate progress: Every project starts at 10%, +10% per team member (max 100%)
//   const calculateProgress = (team) => {
//     const baseProgress = 10; // Every project starts at 10%
//     const teamProgress = (team.length || 0) * 10; // 10% per team member
//     return Math.min(100, baseProgress + teamProgress); // Cap at 100%
//   };

//   // Handle project creation or update
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const calculatedProgress = calculateProgress(newProject.team);

//     if (editProject) {
//       setProjects((prevProjects) =>
//         prevProjects.map((p) =>
//           p.id === editProject.id ? { ...editProject, progress: calculatedProgress } : p
//         )
//       );
//       setEditProject(null);
//     } else {
//       setProjects((prevProjects) => [
//         ...prevProjects,
//         { id: Date.now(), ...newProject, progress: calculatedProgress, status: "Not Started" },
//       ]);
//     }

//     setShowNewProject(false);
//     setNewProject({ name: "", description: "", team: [] });
//   };

//   // Handle project deletion
//   const handleDelete = (id) => {
//     setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
//   };

//   // Handle project edit
//   const handleEdit = (project) => {
//     setEditProject(project);
//     setNewProject({ ...project });
//     setShowNewProject(true);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//           <p className="text-gray-600">Total Projects: {projects.length}</p>
//         </div>
//         <button className="btn btn-primary flex items-center" onClick={() => setShowNewProject(true)}>
//           <FiPlus className="mr-2" /> {editProject ? "Edit Project" : "New Project"}
//         </button>
//       </div>

//       {showNewProject && (
//         <div className="card">
//           <h3 className="text-lg font-semibold mb-4">{editProject ? "Edit Project" : "Create New Project"}</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Project Name</label>
//               <input
//                 type="text"
//                 className="input mt-1 w-full"
//                 value={newProject.name}
//                 onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Description</label>
//               <textarea
//                 className="input mt-1 w-full"
//                 value={newProject.description}
//                 onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Team Members (comma-separated)</label>
//               <input
//                 type="text"
//                 className="input mt-1 w-full"
//                 value={newProject.team.join(", ")}
//                 onChange={(e) =>
//                   setNewProject({ ...newProject, team: e.target.value.split(",").map((t) => t.trim()) })
//                 }
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowNewProject(false)}>
//                 Cancel
//               </button>
//               <button type="submit" className="btn btn-primary">
//                 {editProject ? "Update Project" : "Create Project"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="card">
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg font-semibold">{project.name}</h3>
//               <div className="flex space-x-2">
//                 <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleEdit(project)}>
//                   <FiEdit2 className="w-4 h-4" />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded text-danger" onClick={() => handleDelete(project.id)}>
//                   <FiTrash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-600 mt-2">{project.description}</p>
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 mb-1">
//                 <span>Progress</span>
//                 <span>{project.progress}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-primary rounded-full h-2" style={{ width: `${project.progress}%` }} />
//               </div>
//             </div>
//             <div className="mt-4">
//               <p className="text-sm text-gray-600">Team Members:</p>
//               <div className="flex mt-2">
//                 {project.team.length > 0 ? (
//                   project.team.map((member, index) => (
//                     <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm mr-2">
//                       {member}
//                     </div>
//                   ))
//                 ) : (
//                   <span className="text-gray-500 text-sm">No team members assigned</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

// const API_URL = "http://localhost:5001/projects"; // Backend URL

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [showNewProject, setShowNewProject] = useState(false);
//   const [editProject, setEditProject] = useState(null);
//   const [newProject, setNewProject] = useState({ name: "", description: "", team: [] });

//   // Fetch Projects from Backend
//   // useEffect(() => {
//   //   axios.get(API_URL)
//   //     .then((res) => setProjects(res.data))
//   //     .catch((err) => console.error("Error fetching projects:", err));
//   // }, []);
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get(API_URL);
//         setProjects(res.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };
  
//     fetchProjects(); // Call on component mount
//   }, []);
  
//   // Handle Project Creation & Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editProject) {
//         await axios.put(`${API_URL}/${editProject.id}`, newProject);
//       } else {
//         const res = await axios.post(API_URL, newProject);
//         setProjects([...projects, res.data]);
//       }
//       setShowNewProject(false);
//       setEditProject(null);
//       setNewProject({ name: "", description: "", team: [] });
//     } catch (error) {
//       console.error("Error saving project:", error);
//     }
//   };

//   // Handle Project Deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setProjects(projects.filter((p) => p.id !== id));
//     } catch (error) {
//       console.error("Error deleting project:", error);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//         <button className="btn btn-primary flex items-center" onClick={() => setShowNewProject(true)}>
//           <FiPlus className="mr-2" /> {editProject ? "Edit Project" : "New Project"}
//         </button>
//       </div>

//       {showNewProject && (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" placeholder="Project Name" className="input" value={newProject.name}
//             onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} required />
//           <textarea placeholder="Description" className="input" value={newProject.description}
//             onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} required />
//           <input type="text" placeholder="Team Members (comma-separated)" className="input"
//             value={newProject.team.join(", ")}
//             onChange={(e) => setNewProject({ ...newProject, team: e.target.value.split(",").map(t => t.trim()) })} />
//           <button type="submit" className="btn btn-primary">{editProject ? "Update" : "Create"}</button>
//         </form>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="card">
//             <h3 className="text-lg font-semibold">{project.name}</h3>
//             <p>{project.description}</p>
//             <div className="flex mt-2">{project.team.map((member, i) => (
//               <span key={i} className="bg-gray-100 px-3 py-1 text-sm mr-2">{member}</span>
//             ))}</div>
//             <button onClick={() => handleEdit(project)}><FiEdit2 /></button>
//             <button onClick={() => handleDelete(project.id)}><FiTrash2 /></button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;


//working code
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

// const API_URL = "http://localhost:5001/projects"; // Backend URL

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [showNewProject, setShowNewProject] = useState(false);
//   const [editProject, setEditProject] = useState(null);
//   const [newProject, setNewProject] = useState({ name: "", description: "", team: "" });

//   // ✅ Fetch Projects from Backend on page load
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get(API_URL);
//         console.log("Projects fetched:", res.data); // Debugging log
//         // Ensure `team` is always an array
//         const formattedProjects = res.data.map((project) => ({
//           ...project,
//           team: typeof project.team === "string" ? project.team.split(",").map((t) => t.trim()) : project.team,
//         }));
//         setProjects(formattedProjects);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };

//     fetchProjects();
//   }, []); // Runs only once on mount

//   // ✅ Handle Project Creation & Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editProject) {
//         await axios.put(`${API_URL}/${editProject.id}`, { ...newProject, team: newProject.team.split(",") });
//         setProjects((prevProjects) =>
//           prevProjects.map((p) => (p.id === editProject.id ? { ...editProject, ...newProject } : p))
//         );
//       } else {
//         const res = await axios.post(API_URL, { ...newProject, team: newProject.team.split(",") });
//         setProjects((prevProjects) => [...prevProjects, res.data]);
//       }
//       setShowNewProject(false);
//       setEditProject(null);
//       setNewProject({ name: "", description: "", team: "" });
//     } catch (error) {
//       console.error("Error saving project:", error);
//     }
//   };

//   // ✅ Handle Project Deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setProjects((prevProjects) => prevProjects.filter((p) => p.id !== id));
//     } catch (error) {
//       console.error("Error deleting project:", error);
//     }
//   };

//   // ✅ Handle Project Editing
//   const handleEdit = (project) => {
//     setEditProject(project);
//     setNewProject({ ...project, team: project.team.join(", ") });
//     setShowNewProject(true);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//         <button className="btn btn-primary flex items-center" onClick={() => setShowNewProject(true)}>
//           <FiPlus className="mr-2" /> {editProject ? "Edit Project" : "New Project"}
//         </button>
//       </div>

//       {showNewProject && (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Project Name"
//             className="input"
//             value={newProject.name}
//             onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             className="input"
//             value={newProject.description}
//             onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Team Members (comma-separated)"
//             className="input"
//             value={newProject.team}
//             onChange={(e) => setNewProject({ ...newProject, team: e.target.value })}
//           />
//           <button type="submit" className="btn btn-primary">{editProject ? "Update" : "Create"}</button>
//         </form>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.length > 0 ? (
//           projects.map((project) => (
//             <div key={project.id} className="card">
//               <h3 className="text-lg font-semibold">{project.name}</h3>
//               <p>{project.description}</p>
//               <div className="flex mt-2">
//                 {project.team.length > 0 ? (
//                   project.team.map((member, i) => (
//                     <span key={i} className="bg-gray-100 px-3 py-1 text-sm mr-2">{member}</span>
//                   ))
//                 ) : (
//                   <span className="text-gray-500 text-sm">No team members</span>
//                 )}
//               </div>
//               <div className="flex space-x-2 mt-2">
//                 <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleEdit(project)}>
//                   <FiEdit2 className="w-4 h-4" />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded text-danger" onClick={() => handleDelete(project.id)}>
//                   <FiTrash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No projects found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

// const API_URL = "http://localhost:5001/projects"; // Backend URL

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [showNewProject, setShowNewProject] = useState(false);
//   const [editProject, setEditProject] = useState(null);
//   const [newProject, setNewProject] = useState({ name: "", description: "", team: "", status: "Not Started" });

//   // ✅ Fetch Projects from Backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get(API_URL);
//         const formattedProjects = res.data.map((project) => ({
//           ...project,
//           team: typeof project.team === "string" ? project.team.split(",").map((t) => t.trim()) : project.team,
//         }));
//         setProjects(formattedProjects);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // ✅ Handle Project Creation & Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editProject) {
//         await axios.put(`${API_URL}/${editProject.id}`, { ...newProject, team: newProject.team.split(",") });
//         setProjects((prevProjects) =>
//           prevProjects.map((p) => (p.id === editProject.id ? { ...editProject, ...newProject } : p))
//         );
//       } else {
//         const res = await axios.post(API_URL, { ...newProject, team: newProject.team.split(",") });
//         setProjects((prevProjects) => [...prevProjects, res.data]);
//       }
//       setShowNewProject(false);
//       setEditProject(null);
//       setNewProject({ name: "", description: "", team: "", status: "Not Started" });
//     } catch (error) {
//       console.error("Error saving project:", error);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//         <button className="btn btn-primary flex items-center" onClick={() => setShowNewProject(true)}>
//           <FiPlus className="mr-2" /> {editProject ? "Edit Project" : "New Project"}
//         </button>
//       </div>

//       {showNewProject && (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" placeholder="Project Name" className="input" value={newProject.name}
//             onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} required />
//           <textarea placeholder="Description" className="input" value={newProject.description}
//             onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} required />
//           <input type="text" placeholder="Team Members (comma-separated)" className="input"
//             value={newProject.team} onChange={(e) => setNewProject({ ...newProject, team: e.target.value })} />
//           <select className="input" value={newProject.status} onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}>
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//             <option value="On Hold">On Hold</option>
//           </select>
//           <button type="submit" className="btn btn-primary">{editProject ? "Update" : "Create"}</button>
//         </form>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.length > 0 ? (
//           projects.map((project) => (
//             <div key={project.id} className="card">
//               <h3 className="text-lg font-semibold">{project.name}</h3>
//               <p>{project.description}</p>
//               <p className={`text-sm ${project.status === "Completed" ? "text-green-600" : "text-gray-600"}`}>
//                 Status: {project.status}
//               </p>
//               <div className="flex mt-2">
//                 {project.team.map((member, i) => (
//                   <span key={i} className="bg-gray-100 px-3 py-1 text-sm mr-2">{member}</span>
//                 ))}
//               </div>
//               <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleEdit(project)}>
//                 <FiEdit2 className="w-4 h-4" />
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No projects found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;


import { useState, useEffect } from "react";
import axios from "axios";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

const API_URL = "http://localhost:5001/projects"; // Backend API

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showNewProject, setShowNewProject] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [newProject, setNewProject] = useState({ name: "", description: "", team: "", status: "Not Started" });

  // ✅ Fetch Projects from Backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(API_URL);
        const formattedProjects = res.data.map((project) => ({
          ...project,
          team: typeof project.team === "string" ? project.team.split(",").map((t) => t.trim()) : project.team,
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // ✅ Handle Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProject) {
        await axios.put(`${API_URL}/${editProject.id}`, { ...newProject, team: newProject.team.split(",") });
        setProjects((prevProjects) =>
          prevProjects.map((p) => (p.id === editProject.id ? { ...editProject, ...newProject } : p))
        );
      } else {
        const res = await axios.post(API_URL, { ...newProject, team: newProject.team.split(",") });
        setProjects((prevProjects) => [...prevProjects, res.data]);
      }
      setShowNewProject(false);
      setEditProject(null);
      setNewProject({ name: "", description: "", team: "", status: "Not Started" });
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  // ✅ Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  // ✅ Handle Edit
  const handleEdit = (project) => {
    setEditProject(project);
    setNewProject({ ...project, team: project.team.join(", ") });
    setShowNewProject(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <button className="btn btn-primary flex items-center" onClick={() => setShowNewProject(true)}>
          <FiPlus className="mr-2" /> {editProject ? "Edit Project" : "New Project"}
        </button>
      </div>

      {showNewProject && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Project Name" className="input" value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} required />
          <textarea placeholder="Description" className="input" value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} required />
          <input type="text" placeholder="Team Members (comma-separated)" className="input"
            value={newProject.team} onChange={(e) => setNewProject({ ...newProject, team: e.target.value })} />
          <select className="input" value={newProject.status} onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
          <button type="submit" className="btn btn-primary">{editProject ? "Update" : "Create"}</button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="card">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p className={`text-sm ${project.status === "Completed" ? "text-green-600" : "text-gray-600"}`}>
                Status: {project.status}
              </p>
              <div className="flex mt-2">
                {project.team.map((member, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1 text-sm mr-2">{member}</span>
                ))}
              </div>
              <div className="flex space-x-3 mt-3">
                <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleEdit(project)}>
                  <FiEdit2 className="w-4 h-4 text-blue-600" />
                </button>
                <button className="p-2 hover:bg-red-100 rounded text-red-600" onClick={() => handleDelete(project.id)}>
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
