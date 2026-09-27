

function Jobs() {

    

    const jobs = [
        {
            company: "Tech Solutions",
            role: "Frontend Developer Intern",
            location: "Chennai",
            type: "Internship",
            skills: "React • JavaScript • HTML • CSS"
        },
        {
            company: "Digital Labs",
            role: "Backend Developer Intern",
            location: "Bangalore",
            type: "Internship",
            skills: "Node.js • Express • MongoDB"
        },
        {
            company: "Creative Studio",
            role: "UI/UX Designer",
            location: "Remote",
            type: "Full Time",
            skills: "Figma • UI Design • Prototyping"
        },
        {
            company: "Data Works",
            role: "Data Analyst",
            location: "Hyderabad",
            type: "Full Time",
            skills: "Python • SQL • Excel"
        }
    ];

    return (
        <div className="jobs-page">

            <h1>Jobs & Internships 💼</h1>

            <p className="jobs-subtitle">
                Discover opportunities and take the next step in your career.
            </p>

            <div className="jobs-grid">

                {jobs.map((job, index) => (

                    <div className="job-card" key={index}>

                        <div className="company-logo">
                            💼
                        </div>

                        <h2>{job.role}</h2>

                        <h3>{job.company}</h3>

                        <p>📍 {job.location}</p>

                        <p>💼 {job.type}</p>

                        <small>{job.skills}</small>

                       <button
    onClick={() =>
        alert(`Application submitted for ${job.role} at ${job.company}!`)
    }
>
    Apply Now
</button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Jobs;