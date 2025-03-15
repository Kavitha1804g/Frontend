import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, role: 'user' });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-2xl p-8 login-animation">
        <div className="text-center login-title">
          <h2 className="text-3xl font-bold text-dark">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between form-field">
            <div className="text-sm">
              <Link to="/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                Forgot your password?
              </Link>
            </div>
            <div className="text-sm">
              <Link to="/signup" className="text-primary hover:text-primary/80 transition-colors">
                Don't have an account?
              </Link>
            </div>
          </div>

          <div className="form-field">
            <button type="submit" className="btn btn-primary w-full group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-secondary group-hover:w-full transition-all duration-500 ease-out -z-10"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;