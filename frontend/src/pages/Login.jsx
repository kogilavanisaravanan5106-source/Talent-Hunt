import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        if (email === "" || password === "") {
            setError("Please fill in all fields.");
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                {
                    email: email,
                    password: password
                }
            );

            alert(response.data.message);

            localStorage.setItem("isLoggedIn", "true");

            navigate("/dashboard");

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Something went wrong."
            );
        }
    };

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-left">

                    <h1>TALENT HUNT</h1>

                    <h2>Discover Your Potential.</h2>

                    <p>
                        Connect with talented people,
                        discover opportunities and
                        grow your professional network.
                    </p>

                    <div className="features">
                        <span>✦ Find Talent</span>
                        <span>✦ Build Connections</span>
                        <span>✦ Discover Opportunities</span>
                    </div>

                </div>

                <div className="login-box">

                    <h2>Welcome Back!</h2>

                    <p className="subtitle">
                        Login to continue to Talent Hunt
                    </p>

                    <form onSubmit={handleLogin}>

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}

                        <button type="submit">
                            Login
                        </button>

                    </form>

                    <p className="signup">
                        Don't have an account?
                        <span onClick={() => navigate("/signup")}>
                            {" "}Sign Up
                        </span>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;