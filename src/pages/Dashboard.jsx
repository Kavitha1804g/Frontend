// import { useState } from 'react';
// import { FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// function Dashboard() {
//   const [stats] = useState({
//     activeProjects: 20,
//     pendingTasks: 15,
//     completedProjects: 2
//   });
  

//   const chartData = {
//     labels: ['In Progress', 'Completed', 'On Hold'],
//     datasets: [
//       {
//         data: [12, 8, 4],
//         backgroundColor: ['#4F46E5', '#10B981', '#F59E0B'],
//       },
//     ],
//   };

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="card flex items-center">
//           <div className="p-3 rounded-full bg-primary/10 mr-4">
//             <FiUsers className="w-6 h-6 text-primary" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Active Projects</p>
//             <p className="text-2xl font-semibold">{stats.activeProjects}</p>
//           </div>
//         </div>
//         <div className="card flex items-center">
//           <div className="p-3 rounded-full bg-warning/10 mr-4">
//             <FiClock className="w-6 h-6 text-warning" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Pending Tasks</p>
//             <p className="text-2xl font-semibold">{stats.pendingTasks}</p>
//           </div>
//         </div>
//         <div className="card flex items-center">
//           <div className="p-3 rounded-full bg-success/10 mr-4">
//             <FiCheckCircle className="w-6 h-6 text-success" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Completed Projects</p>
//             <p className="text-2xl font-semibold">{stats.completedProjects}</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="card">
//           <h3 className="text-lg font-semibold mb-4">Project Status Overview</h3>
//           <div className="w-full h-64">
//             <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
//           </div>
//         </div>
//         <div className="card">
//           <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
//           <div className="space-y-4">
//             {/* Mock activity items */}
//             <div className="flex items-center justify-between py-2 border-b">
//               <div>
//                 <p className="font-medium">Website Redesign</p>
//                 <p className="text-sm text-gray-600">New task added</p>
//               </div>
//               <span className="text-sm text-gray-500">2h ago</span>
//             </div>
//             <div className="flex items-center justify-between py-2 border-b">
//               <div>
//                 <p className="font-medium">Mobile App Development</p>
//                 <p className="text-sm text-gray-600">Project completed</p>
//               </div>
//               <span className="text-sm text-gray-500">1d ago</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import { useState, useEffect } from "react";
import axios from "axios";
import { FiUsers, FiClock, FiCheckCircle } from "react-icons/fi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const API_URL = "http://localhost:5001/dashboard"; // Backend URL

function Dashboard() {
  const [stats, setStats] = useState({
    activeProjects: 0,
    pendingProjects: 0,
    completedProjects: 0,
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"] }],
  });

  // ✅ Fetch dashboard stats & chart data on mount
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const statsRes = await axios.get(`${API_URL}/stats`);
        console.log("Dashboard Stats:", statsRes.data); // Debugging Log

        setStats(statsRes.data);

        const chartRes = await axios.get(`${API_URL}/status-overview`);
        setChartData(chartRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-6">
      {/* 📌 Project Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card flex items-center">
          <div className="p-3 rounded-full bg-primary/10 mr-4">
            <FiUsers className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Active Projects</p>
            <p className="text-2xl font-semibold">{stats.activeProjects}</p>
          </div>
        </div>
        <div className="card flex items-center">
          <div className="p-3 rounded-full bg-warning/10 mr-4">
            <FiClock className="w-6 h-6 text-warning" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending Projects</p>
            <p className="text-2xl font-semibold">{stats.pendingProjects}</p>
          </div>
        </div>
        <div className="card flex items-center">
          <div className="p-3 rounded-full bg-success/10 mr-4">
            <FiCheckCircle className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Completed Projects</p>
            <p className="text-2xl font-semibold">{stats.completedProjects}</p>
          </div>
        </div>
      </div>

      {/* 📊 Project Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Project Status Overview</h3>
          <div className="w-full h-64">
            <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* 📝 Recent Activities (Mock Data) */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Website Redesign</p>
                <p className="text-sm text-gray-600">New task added</p>
              </div>
              <span className="text-sm text-gray-500">2h ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Mobile App Development</p>
                <p className="text-sm text-gray-600">Project completed</p>
              </div>
              <span className="text-sm text-gray-500">1d ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
