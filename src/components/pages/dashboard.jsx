import React  from "react";
function Dashboard(){
    return(
        <div className="container">
            <div className="heading">
                <h1>Good Mornning User!</h1>
                <h3>Ready to continue your learning?</h3>
            </div>
            <div className="content">
                <div className="item">
                    <h3>Tasks</h3>
                    <p>lol</p>
                </div>
                <div className="item">
                    <h3>Completed</h3>
                </div>
                <div className="item">
                    <h3>Subjects</h3>
                </div>
                <div className="item">
                    <h3>Streak</h3>
                </div>
            </div>
        </div>
        
    )
}
export default Dashboard;