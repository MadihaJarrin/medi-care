import React, { useEffect, useState } from 'react';
import "./team.css"

const Team = () => {
    const [teams, setDocteam] = useState([]);
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/MadihaJarrin/assignment-10-main/main/main`
        fetch(url)
            .then(res => res.json())
            .then(data => setDocteam(data))
    }, []);

    return (
        <div>
            <h1 className="doctor">Our Specialists</h1>
            <br />
            {
                teams.map((team) => {
                    const { name, img, degree, specialty, details } = team;
                    return (
                        <div className="team-card">
                            <img src={img} alt="" />
                            <h1>{name}</h1>
                            <h4>Degree:- {degree}</h4>
                            <h6>Specialty:- {specialty}</h6>
                            <p>About:- {details}</p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Team;