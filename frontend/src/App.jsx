import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";


function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/home" element={<Home />} />

                <Route path="/network" element={<Network />} />

                <Route path="/jobs" element={<Jobs />} />

                

            </Routes>

        </BrowserRouter>
    );
}

export default App;