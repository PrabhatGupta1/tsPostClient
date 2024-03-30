import React, { useState } from "react";
import ImageIcon from '@mui/icons-material/Image';
import CustomButton from './CustomButton';

function CreatePostArea(props) {

    // const [post,setPost] = useState({
    //     caption: "",
    //     imageMedia: ""
    // });
    const [caption, setCaption]= useState("");
    const [file,setFile] = useState(null);

    // function handlePostChange(event) {
    //     const {name, value} = event.target;
    //     setPost((prevPost)=>{
    //         return {
    //             ...post,
    //             [name]: value
    //         }
    //     });
    // }

    function previewImage(chosen,display) {
        var input = document.getElementById(chosen);
        var preview = document.getElementById(display);
        var file = input.files[0];
        var reader = new FileReader();
    
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
    function handleCaptionChange(event) {
        setCaption(event.target.value);
    }

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        previewImage('post-img','imageMediaPost');
    }

    async function handlePostClick() {

        const formData = new FormData();

        formData.append('caption', caption);
        formData.append('imageMedia', file);
        

        try {
            const response = await fetch("http://localhost:3000/userPosts/addPost",{
                method: 'POST',
                body: formData
            });

            if(response.ok) {
                alert("Post Sent Successfully");
            } else {
                alert("Error occured while posting");
            }
        } catch (error) {
            console.log("Post Error: "+error);
        }
    }

    return (
        <div className="create-post">
            <div className='content'>
                <textarea onChange={handleCaptionChange} name="caption" rows={3} placeholder="What's in your mind?" value={caption}></textarea>
                <img id="imageMediaPost" src="" style={{display: file?'block':'none'}}/>
            </div>
            <div className='post-panel'>
                <div>
                    <input style={{display: 'none'}} onChange={handleFileChange} name="imageMedia" type='file' id='post-img' />
                    <label htmlFor="post-img"><ImageIcon/> Select Media</label>
                </div>
                <div>
                    <CustomButton onPostClick={handlePostClick} onAddNewPost={props.onAddPost} onClose={props.onClose} text="Post" disabled={!((caption.trim()).length > 0 || file)}/>
                </div>
            </div>
        </div>
    );
}

export default CreatePostArea;