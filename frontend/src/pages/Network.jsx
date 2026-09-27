import { useState } from "react";

function Network() {

    const [people, setPeople] = useState([
        {
            name: "Arun Kumar",
            role: "Frontend Developer",
            skills: "React • JavaScript",
            connected: false
        },
        {
            name: "Priya Sharma",
            role: "UI/UX Designer",
            skills: "Figma • UI Design",
            connected: false
        },
        {
            name: "Rahul Raj",
            role: "Backend Developer",
            skills: "Node.js • Express",
            connected: false
        },
        {
            name: "Meena Devi",
            role: "Data Analyst",
            skills: "Python • SQL",
            connected: false
        }
    ]);

    const handleConnect = (index) => {

        const updatedPeople = [...people];

        updatedPeople[index].connected =
            !updatedPeople[index].connected;

        setPeople(updatedPeople);
    };

    return (
        <div className="network-page">

            <h1>My Network 👥</h1>

            <p className="network-subtitle">
                Discover talented people and build your professional network.
            </p>

            <div className="people-grid">

                {people.map((person, index) => (

                    <div className="person-card" key={index}>

                        <div className="person-avatar">
                            👤
                        </div>

                        <h2>{person.name}</h2>

                        <p>{person.role}</p>

                        <small>{person.skills}</small>

                        <button
                            onClick={() => handleConnect(index)}
                        >
                            {person.connected
                                ? "Connected ✓"
                                : "Connect"}
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Network;