import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from "./components/layout/sidebar";
import Navbar from "./components/layout/navbar";
import './App.css'; 

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <div className="main-content">
                    <Sidebar />
                    <div className="content-area">
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" />} />
                            <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
                            <Route path="/tasks" element={<h1>Tasks Page</h1>} />
                            <Route path="/subjects" element={<h1>Subjects Page</h1>} />
                            <Route path="/projects" element={<h1>Projects Page</h1>} />
                            <Route path="/achievements" element={<h1>Achievements Page</h1>} />
                            <Route path="/profile" element={<h1>Profile Page</h1>} />
                            <Route path="/settings" element={<h1>Settings Page</h1>} />
                            <Route path="/logout" element={<h1>Logout Page</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;