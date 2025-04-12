// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { use, useEffect, useState} from "react"
// import Login from './pages/Login';
// import './App.css';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';
// import Projects from './pages/Projects';
// import Tasks from './pages/Tasks';
// import Settings from './pages/Settings';
// import Layout from './components/Layout';
// import { AuthProvider } from './context/AuthContext';


// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/dash" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/" element={<Layout />}>
//             {/* <Route index element={<Dashboard />} /> */}
//             <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Add this */}

//             <Route path="projects" element={<Projects />} />
//             <Route path="tasks" element={<Tasks />} />
//             <Route path="settings" element={<Settings />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Dashboard from "./pages/Dashboard";
// import Projects from "./pages/Projects";
// import Tasks from "./pages/Tasks";
// import Settings from "./pages/Settings";
// import Layout from "./components/Layout";
// import { AuthProvider, useAuth } from "./context/AuthContext";

// // ✅ Private Route Wrapper
// function PrivateRoute({ element }) {
//   const { user } = useAuth();
//   return user ? element : <Navigate to="/login" />;
// }

// function App() {
//   return (
//     <Router> {/* 🔹 Router must wrap AuthProvider */}
//       <AuthProvider>
//         <Routes>
//           {/* 🔹 Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />

//           {/* 🔹 Protected Layout */}
//           <Route path="/" element={<PrivateRoute element={<Layout />} />}>
//             <Route index element={<Navigate to="dashboard" />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="projects" element={<Projects />} />
//             <Route path="tasks" element={<Tasks />} />
//             <Route path="settings" element={<Settings />} />
//           </Route>

//           {/* 🔹 Catch-all for undefined routes */}
//           <Route path="*" element={<Navigate to="/dashboard" />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router> {/* ✅ Router should wrap everything */}
      <AuthProvider> {/* ✅ Move AuthProvider inside Router */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
