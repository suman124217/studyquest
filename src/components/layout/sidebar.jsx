function Sidebar() {
    return(
        <div className="sidebar">
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/tasks">Tasks</a></li>
                <li><a href="/subjects">Subjects</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/achievements">Achievements</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    );
}
export default Sidebar;