import { useState, useEffect } from "react";

function Profile() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [education, setEducation] = useState("");

    useEffect(() => {

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {

        const profile = JSON.parse(savedProfile);

        setName(profile.name);
        setEmail(profile.email);
        setAbout(profile.about);
        setSkills(profile.skills);
        setEducation(profile.education);
    }

}, []);

    const handleSave = () => {

        const profile = {
            name,
            email,
            about,
            skills,
            education
        };

        localStorage.setItem(
            "profile",
            JSON.stringify(profile)
        );

        alert("Profile saved successfully!");
    };

    return (
        <div className="profile-page">

            <div className="profile-header">
                <div className="profile-avatar">
                    👤
                </div>

                <div>
                    <h1>My Profile</h1>
                    <p>Build your professional identity</p>
                </div>
            </div>

            <div className="profile-card">

                <h2>Personal Information</h2>

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

                <label>About Me</label>
                <textarea
                    placeholder="Tell us about yourself"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>

                <label>Skills</label>
                <input
                    type="text"
                    placeholder="Example: React, Java, Python"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />

                <label>Education</label>
                <input
                    type="text"
                    placeholder="Enter your education"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                />

                <button
                    className="save-profile"
                    onClick={handleSave}
                >
                    Save Profile
                </button>

            </div>

        </div>
    );
}

export default Profile;