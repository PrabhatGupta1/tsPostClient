import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function LikeButton(props) {

    if(props.isLiked) {
        return <FavoriteIcon onClick={props.onClick}/>
    } else {
        return <FavoriteBorderIcon onClick={props.onClick}/>
    }
}

export default LikeButton;