import React, { useEffect, useState } from "react";
import User from "./User";

function SuggestedConnections() {

    const [suggestedConnections, setSuggestedConnections] = useState([]);

    useEffect(()=>{
        getSuggestedConnections();
    },[]);

    async function getSuggestedConnections() {

        try {
            const response = await fetch("http://localhost:3000/api/suggestedConnections",{
                method: 'GET'
            });

            console.log(response);

            const data = await response.json();

            if(response.ok) {
                setSuggestedConnections(data);
            } else {
                console.log("Error occured while fetching suggested connections.");
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div class="suggested-tribes">
            <p class="heading pb-0 mb-0">Suggested Connections</p>
            {suggestedConnections.map((user)=>{
                return <User fullname={user.fullname} bio={user.bio} profilePicUrl={user.profile_pic_url} username={user.username}/>;
            })}
        </div>
    );
}

export default SuggestedConnections;