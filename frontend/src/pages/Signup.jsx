import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

   const handleSignup = async (e) => {

    e.preventDefault();

    setError("");

    if (name === "" || email === "" || password === "") {
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

        const response = await axios.post("https://talent-hunt-backend-d4kv.onrender.com/api/signup",
            {
                name: name,
                email: email,
                password: password
            }
        );

        alert(response.data.message);

        navigate("/");

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

                    <h2>Start Your Journey.</h2>

                    <p>
                        Create your profile, connect with talented
                        people and discover exciting opportunities.
                    </p>

                    <div className="features">
                        <span>✦ Create Your Profile</span>
                        <span>✦ Build Connections</span>
                        <span>✦ Find Opportunities</span>
                    </div>

                </div>

                <div className="login-box">

                    <h2>Create Account</h2>

                    <p className="subtitle">
                        Join Talent Hunt today
                    </p>

                    <form onSubmit={handleSignup}>

                        <label>Name</label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}

                        <button type="submit">
                            Sign Up
                        </button>

                    </form>

                    <p className="signup">
                        Already have an account?
                        <span onClick={() => navigate("/")}>
                            {" "}Login
                        </span>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Signup;