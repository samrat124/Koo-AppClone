import React, { useEffect, useState } from "react";
import "./Card.css";

export default function Card({image, name, username, profession, description, hashtags, image2}) {
  const [data, setdata] = useState([]);

  const [state, setState]= useState(5)

 
  const updateCount = () => {
 
           if(state<6){
            setState((prevState) => prevState + 1);
           }

           if(state==6){
            setState((prevState) => prevState - 1);
           }
    

  

 


  };

  return (
    <>
     
  
          <div id="g-parent-div">
            <div id="g-main-div">
              <div className="cont1">
                {image ? (
                  <img className="profilepic" src={image} alt="postimg" />
                ) : (
                  <img
                    className="profilepic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhPz7CL8gVPIQ3wkwqaslgqc8DJ_XlzT9rg&usqp=CAU"
                    alt="postimg"
                  />
                )}

                <div id="g-nu">
                  <div>
                    <h3 className="name">{name}</h3>
                  </div>
                  <div className="username">
                    {username} - {profession}
                  </div>
                </div>
              </div>
              <div className="cont2">
                <span>{description}</span>
              </div>

              <div className="contto">{hashtags}</div>
              <div className="cont3">
                <img src={image2} alt="postimg" />
              </div>

              <div className="cont5">
                <img
                  src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
                  alt="comment"
                />
                <div>Write your comment...</div>
              </div>

              <div className="cont4">
                <div onClick={updateCount}>
                  <img
                    src="https://www.kooapp.com/img/Like1.5.svg"
                    alt="like"
                  />
                  <p>{state}</p>
                </div>
                <div>
                  <img
                    src="https://www.kooapp.com/img/Inactive-comment.svg"
                    alt="comment"
                  />

                  <p>2</p>
                </div>
                <div>
                  <img
                    src="https://www.kooapp.com/img/Rekoo1.5.svg"
                    alt="swap"
                  />
                </div>
                <div>
                  <a href="https://web.whatsapp.com/" target="_blank">
                    <img
                      className="whatsappicon"
                      src="https://www.kooapp.com/img/cardFooterIcons/whatsapp_new.svg"
                      alt="whatsapp"
                    />
                  </a>
                </div>
                <div>
                  <img
                    src="https://www.kooapp.com/img/cardFooterIcons/share_new.svg"
                    alt="share"
                  />
                </div>
              </div>
            </div>
          </div>
        
  
    </>
  );
}
