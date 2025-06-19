// src/components/Navbar.jsx
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <div className="navbar">
      <h2>My App</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}