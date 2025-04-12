import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiFolder, FiCheckSquare, FiSettings } from 'react-icons/fi';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: FiHome, label: 'Dashboard' },
    { path: '/projects', icon: FiFolder, label: 'Projects' },
    { path: '/tasks', icon: FiCheckSquare, label: 'Tasks' },
    { path: '/settings', icon: FiSettings, label: 'Settings' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 shadow-lg">
      <div className="p-6">
      <div className="flex flex-col items-center p-6">

  <h1 className="text-1xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text tracking-widest uppercase logo-text">
    Project Hub
  </h1>
  <div className="w-2 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 animate-glow"></div>
</div>

<style>
  {`
    .logo-text {
      letter-spacing: 3px;
      text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
      transition: transform 0.3s ease-in-out;
    }
    .logo-text:hover {
      transform: scale(1.05);
    }
    @keyframes glow {
      0% { box-shadow: 0 0 5px #4c51bf; }
      50% { box-shadow: 0 0 15px #9f7aea; }
      100% { box-shadow: 0 0 5px #4c51bf; }
    }
    .animate-glow {
      animation: glow 1.5s infinite alternate;
    }
  `}
</style>

      </div>
      <nav className="mt-">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
            key={item.path}
            to={item.path}
            //added now
            // onClick={() => {
            //   if (location.pathname === item.path) {
            //     window.location.reload(); // ✅ Force refresh if already on the same page
            //   }
            // }}

            className={`group flex items-center px-7 py-4 text-gray-100 font-semibold rounded-lg transition-all duration-300 relative overflow-hidden ${
              isActive
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md border-l-4 border-purple-400 scale-105'
                : 'hover:bg-gray-800 hover:shadow-lg hover:scale-105'
            }`}
          >
            
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
        
            <Icon className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
          
           
            <span className="relative group-hover:tracking-wide transition-all duration-300">
              {item.label}
            </span>
          
            {/* Right Side Glowing Effect */}
            <span className="absolute right-0 w-1 h-full bg-gradient-to-b from-transparent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Link>
          
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;