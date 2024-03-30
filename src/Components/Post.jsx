import React, { useState } from "react";
import LikeButton from "./LikeButton";
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';


function Post(props) {
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
      setIsLiked((prevValue)=> {
        return !prevValue;
      });
    }

    function timeAgo(timestamp) {
      const seconds = Math.floor((new Date() - timestamp) / 1000);
    
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
      };
    
      for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
    
        if (interval >= 1) {
          return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
        }
      }
    
      return 'Just now';
    }
    
    const timestamp = new Date(props.postTime).getTime();
    const postTimeAgo = timeAgo(timestamp);
    
    return (
        <div className="post">
              <div className="user-info">
                <a href={"http://localhost:3000/profile?user="+props.username}><img src={props.profilePicUrl?"uploads/"+props.profilePicUrl:"./images/profile-pic.png"} alt="" /></a>
                <span><p className="user-name">@{props.username}</p></span>
                <span> . </span>
                <span>{postTimeAgo}</span>
              </div>
              <div className="caption"><p>{props.caption}</p></div>
              {props.imageMediaUrl && <div className="user-post"><img src={"posts/"+props.imageMediaUrl} alt="" /></div>}
              <div className="post-interaction py-2">
                <LikeButton isLiked={isLiked} onClick={handleLike}/>
                <CommentIcon />
                <ShareIcon />
              </div>
              <div className="comment-section">
                {/* <form action="" method="">
                  <div className="comment-input">
                    <div className="comment-field"><input type="text" name="comment" id="comment" oninput="commentPost()" placeholder="Add a comment" required></div>
                    <div className="add"><input type="submit" value="Post" id="comment-post" /></div>
                  </div>
                </form> */}
              </div>
            </div>
    );
}

export default Post;