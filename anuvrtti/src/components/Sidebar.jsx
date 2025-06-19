import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";
import {
  FaChartLine,
  FaFileAlt,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/Anuvrtti.png";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="Anuvrtti logo" className="logo" />
        <h3>Anuvrtti</h3>
        <nav>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartLine /> Dashboard
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaFileAlt /> Reports
          </NavLink>
          <NavLink
            to="/logs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaClipboardList /> Logs
          </NavLink>
        </nav>
		<button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt style={{ marginRight: "8px" }} />
        Logout
      </button>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt style={{ marginRight: "8px" }} />
        Logout
      </button>
    </div>
  );
}
