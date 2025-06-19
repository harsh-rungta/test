// src/pages/Dashboard.jsx
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
}
