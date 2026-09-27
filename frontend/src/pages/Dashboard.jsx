import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {

        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
            navigate("/");
        }

    }, [navigate]);

    return (
        <div className="dashboard">

            <nav className="navbar">
                <h1>TALENT HUNT</h1>

                <div className="nav-links">

   <span onClick={() => navigate("/home")}>
    Home
</span>

    <span onClick={() => navigate("/profile")}>
        My Profile
    </span>

    <span onClick={() => navigate("/network")}>
    My Network
</span>

    <span onClick={() => navigate("/jobs")}>
    Jobs
</span>



    <span>Messages</span>

</div>

                <button
                    className="logout-btn"
                    onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        navigate("/");
                    }}
                >
                    Logout
                </button>

            </nav>

            <main className="dashboard-content">

                <h2>Welcome to TALENT HUNT 👋</h2>

                <p>
                    Discover talented people, build connections
                    and explore new opportunities.
                </p>

                <div className="dashboard-cards">

                    <div className="dashboard-card">
                        <h3>👥 My Network</h3>
                        <p>Connect with talented people.</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>💼 Jobs & Internships</h3>
                        <p>Discover new career opportunities.</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>💬 Messages</h3>
                        <p>Connect and communicate with others.</p>
                    </div>

                </div>

            </main>

        </div>
    );
}

export default Dashboard;