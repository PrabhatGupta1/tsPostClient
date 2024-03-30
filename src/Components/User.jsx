import React from "react";

function User(props) {

  let bio = props.bio;

  if(bio) {
    if(bio.length>60) {
      bio = bio.slice(0,60)+" . . .";
    } 
  } 

  async function updateConnections() {  
      const connectionReq = {
          userToConnect: props.username,
      };
    
      document.getElementsByName(props.username)[0].innerHTML = "Pending";
  
      console.log(connectionReq);
  
      try {
          const response = await fetch('http://localhost:3000/update/connection', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(connectionReq),
          });
  
          if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
          }
 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
  }

    return (
        <div class="user py-3">
          <a href={"profile?user="+props.username}><img src={props.profilePicUrl?"uploads/"+props.profilePicUrl:"./images/profile-pic.png"} alt="" /></a>
          <p class="user-name">{props.fullname}</p>
          <p class="user-headline pb-2">{bio}</p>
          <button class="rounded request-button connect-btn" onClick={updateConnections} name={props.username} type="button">+ Connect</button>
        </div>
    );
}

export default User;

