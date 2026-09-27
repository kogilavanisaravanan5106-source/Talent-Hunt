const express = require("express");
const cors = require("cors");

const app = express();

const users = [
    {
        name: "Demo User",
        email: "demo@talenthunt.com",
        password: "talenthunt123"
    }
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("TALENT HUNT Backend is running!");
});

app.post("/api/login", (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        (user) =>
            user.email === email &&
            user.password === password
    );

    if (user) {
        res.json({
            success: true,
            message: "Login successful!"
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }
});

app.post("/api/signup", (req, res) => {

    const { name, email, password } = req.body;

    const existingUser = users.find(
        (user) => user.email === email
    );

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "Email already registered."
        });
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    res.json({
        success: true,
        message: "Account created successfully!"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`TALENT HUNT server running on port ${PORT}`);
});