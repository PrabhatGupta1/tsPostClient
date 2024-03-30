import React, { useEffect, useState } from "react";

function ProfileSummary(props) {

    const [connectionCount, setConnectionCount]= useState(0);

    useEffect(()=>{
        getConnectionCount();
    }, []);

    async function getConnectionCount() {
        try {
            const response = await fetch("http://localhost:3000/api/connectionCount",{
                method: 'GET'
            });

            if(response.ok) {
                const data = await response.json();
                console.log(data);
                setConnectionCount(data.count);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="profile-summary">
                <div className="text-centre">
                    <a href="/profile"><img id="profile-pic" src={props.profilePicUrl?"uploads/"+props.profilePicUrl:"./images/profile-pic.png"} alt="" /></a>
                </div>
                <p className="user-name">{props.username}</p>
                <p className="bio">{props.bio}</p>
                <p className="connection-count">{connectionCount} Connections</p>
        </div>
    );
}

export default ProfileSummary;