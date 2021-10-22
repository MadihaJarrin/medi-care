import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [teams, setDocteam] = useState([]);
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/MadihaJarrin/ass-10-blog/main/blog`
        fetch(url)
            .then(res => res.json())
            .then(data => setDocteam(data))
    }, []);

    return (
        <div>
            <h1 style={{
                padding: "10px", textShadow: "2px 2px 2px rgb(3, 95, 34)",
                color: "rgb(15, 192, 15) "
            }}>We work for your health</h1>
            {
                teams.map((team) => {
                    const { title, img, details } = team;
                    return (
                        <div className="team-card">
                            <img className="img-fluid" src={img} alt="" />
                            <h1>{title}</h1>
                            <p>About:- {details}</p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Blog;