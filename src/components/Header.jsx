import { useAuth } from '../context/AuthContext';
import { FiBell, FiUser } from 'react-icons/fi';
import { Menu } from '@headlessui/react';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-dark">Hello Again! Ready to Manage your Projects</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-secondary/10 rounded-full text-dark">
            <FiBell className="w-5 h-5" />
          </button>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 p-2 hover:bg-secondary/10 rounded-full text-dark">
              <FiUser className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-secondary/10' : ''
                    } block w-full text-left px-4 py-2 text-sm text-dark`}
                    onClick={logout}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;