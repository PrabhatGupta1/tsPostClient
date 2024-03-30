import React, { useEffect, useState } from "react";
import ProfileSummary from "./ProfileSummary";
import QuickLinks from "./QuickLinks";
import BasicModal from "./BasicModel";
import Post from "./Post";
import SuggestedConnections from "./SuggestedConnections";
import BrandName from "./BrandName";

function MainContent() {

    const [posts, setPosts] = useState([]);
    const [profileSummary, setProfileSummary] = useState({
        username: "",
        profilePicUrl: "",
        bio: ""
    });

    // function addNewPost(post) {
    //     setPosts((prevPosts)=> {
    //         return [...posts, post];
    //     });
    // }

    useEffect(()=> {
        getPosts("getPosts");
        getProfileSummary();
    },[]);

    function getMyPosts() {
        getPosts("getMyPosts");
    }

    function getHomePosts() {
        getPosts("getPosts");
    }

    async function getPosts(type) {
        try {
            const response = await fetch("http://localhost:3000/userPosts/"+type, {
                method: 'GET'
            });

            console.log(response);

            const data = await response.json();
            
            if(response.ok) {
                setPosts(data);
            } else {
                console.log("Error while fetching posts");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getProfileSummary() {
        try {
            const response = await fetch("http://localhost:3000/home/profileSummary", {
                method: 'GET'
            });
            const data = await response.json();
            const profile = data[0];
            if(response.ok) {
                setProfileSummary({
                    username: profile.username,
                    profilePicUrl: profile.profile_pic_url,
                    bio: profile.bio
                });
            } else {
                console.log("Error hello");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 px-3 pt-2 left-sidebar">
                    <BrandName />
                    <ProfileSummary profilePicUrl={profileSummary.profilePicUrl} username={profileSummary.username} bio={profileSummary.bio}/>
                    <QuickLinks getMyPosts={getMyPosts} getHomePosts={getHomePosts}/>
                </div>
                <div className="col-sm-6 main-content">
                    <BasicModal onPostUpdate={getHomePosts}/>
                    {posts.map((post)=>{
                        return <Post caption={post.caption} username={post.username} profilePicUrl={post.profile_pic_url} imageMediaUrl={post.image_media_url} postTime={post.posted_at}/>
                    })}
                </div>
                <div class="col-sm-3 px-3 pt-3 right-sidebar">
                    <SuggestedConnections />
                </div>
            </div>
        </div>
    );
}

export default MainContent;