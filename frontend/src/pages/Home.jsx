import { useState, useEffect } from "react";

function Home() {


    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([
        {
            name: "Demo User",
            text: "Excited to start my professional journey with TALENT HUNT!"
        },
        {
            name: "Student Developer",
            text: "Looking for internship opportunities 🚀"
        }
    ]);

    useEffect(() => {

        const savedPosts = localStorage.getItem("posts");

        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }

    }, []);


    const handlePost = () => {

        if (postText.trim() === "") {
            return;
        }

        const newPost = {
            name: "You",
            text: postText
        };

        const updatedPosts = [newPost, ...posts];

        setPosts(updatedPosts);

        localStorage.setItem(
            "posts",
            JSON.stringify(updatedPosts)
        );

        setPostText("");
    };



    return (
        <div className="home-page">

            <h1>Welcome to TALENT HUNT 👋</h1>

            <p className="home-subtitle">
                Connect. Discover. Grow.
            </p>

            <div className="post-box">

                <textarea
                    placeholder="Share something with your network..."
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                ></textarea>
                <button onClick={handlePost}>
                    Post
                </button>

            </div>

            {posts.map((post, index) => (

                <div className="post-card" key={index}>

                    <h3>👤 {post.name}</h3>

                    <p>{post.text}</p>

                </div>

            ))}

        </div>
    );
}

export default Home;