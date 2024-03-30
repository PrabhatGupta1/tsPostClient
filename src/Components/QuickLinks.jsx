import React from "react";

function QuickLinks(props) {

    function handleClickOnMyPosts() {
        props.getMyPosts();
    }

    function handleClickOnHomePosts() {
        props.getHomePosts();
    }

    return (
        <div className="quick-links py-3">
              <p className="heading">Quick Links</p>
              <a style={{display: 'block'}} type="button" onClick={handleClickOnHomePosts}><p><img src="./images/home.png" alt="" /> Home</p></a>
              <a type="button" onClick={handleClickOnMyPosts}><p><img src="./images/my-profile.jpg" alt="" /> My Posts</p></a>
              <a className="links" href=""><p><img src="./images/communities-icon.jpg" alt="" /> Communities</p></a>
              <a className="links" href=""><p><img src="./images/events-icon.png" alt="" /> Events</p></a>
              <a className="links" href=""><p><img src="./images/notifications-icon.png" alt="" /> Notifications</p></a>
              <a className="links" href=""><p><img src="./images/settings.png" alt="" /> Settings</p></a>
              <a className="links" href="/logout"><p><img src="./images/logout.png" alt="" /> Logout</p></a>
        </div>
    );
}

export default QuickLinks;