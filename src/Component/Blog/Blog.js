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
            <h1>We work for your health</h1>
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