import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup - in real app would create account in backend
    login(formData);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-2xl p-8 login-animation">
        <div className="text-center login-title">
          <h2 className="text-3xl font-bold text-dark">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="form-field">
              <label htmlFor="name" className="block text-sm font-medium text-dark">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input mt-1 bg-gray-50 border-gray-200 focus:border-primary"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="block text-sm font-medium text-dark">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input mt-1 bg-gray-50 border-gray-200 focus:border-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password" className="block text-sm font-medium text-dark">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input mt-1 bg-gray-50 border-gray-200 focus:border-primary"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor='role' className="block text-sm font-medium text-dark">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                className="input mt-1 bg-gray-50 border-gray-200 focus:border-primary"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-center">
            <Link to="/login" className="text-primary hover:text-primary/80">
              Already have an account? Sign in
            </Link>
          </div>

          <div className="form-field">
            <button type="submit" className="btn btn-primary w-full group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-secondary group-hover:w-full transition-all duration-500 ease-out -z-10"></span>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
