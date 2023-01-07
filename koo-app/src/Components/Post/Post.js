import React,{useState} from "react";

import "./Post.css";
export default function Post() {
  const[text, setText]= useState('');

  const handlechange = (event)=>{
    console.log("On change");
    setText(event.target.value)
}
  return (
    <div id="sh-main-div">
      <div id="sh-top-div">
        <div id="sh-top-left">
          <div style={{ marginTop: "14px" }}>
            {" "}
            <img
              src="https://www.kooapp.com/_next/static/media/create_back-arrow.cea4aa95.svg"
              alt=""
              width="90%"
            />{" "}
          </div>
          <div style={{ marginTop: "13px" }}>
            {" "}
            <img
              src="https://www.kooapp.com/_next/static/media/profilePlaceholderYellow.df4b6e90.svg"
              width="45%"
              alt=""
            />{" "}
          </div>
        </div>
        <div id="sh-post-div">
          <button id="g-post-button">Post</button>
        </div>
      </div>
      <div id="sh-middle-div">
        <textarea
          name=""
          id=""
          value={text}
          cols="80"
          rows="10"
          vaalue={text}
          placeholder="Whats on your mind?"
          onChange={handlechange}
        ></textarea>
      </div>
      <div id="sh-bottom-div">
          <div id="sh-bottom-main-left">
              <div><img src="https://img.icons8.com/windows/2x/image-gallery.png" alt="" width="50%"  /></div>
              <div><img src="https://img.icons8.com/fluency-systems-regular/2x/video-clip.png" alt="" width="70%" /></div>
              <div style={{marginTop:"-10px"}}><img src="https://www.kooapp.com/_next/static/media/create_add-link.518e015c.svg" alt=""  /></div>
              <div style={{marginTop:"-10px"}}><img src="https://www.kooapp.com/_next/static/media/create_add-poll.3aec89c2.svg" alt="" width="" /></div>
          </div>
        

          <div id="sh-bottom-main-right">
          <img src="https://img.icons8.com/fluency-systems-regular/512/microphone.png" width="20px"
           alt="" />
        <br />
           {text.length}/400 
          </div>
      
      </div>
    </div>
  );
}
