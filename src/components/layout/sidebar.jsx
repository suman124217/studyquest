import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/subjects">Subjects</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li className="logout-item"><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}
export default Sidebar;                