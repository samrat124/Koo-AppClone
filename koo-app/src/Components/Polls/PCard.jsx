import React, { useEffect, useState } from "react";
import "../Card/Card.css";
import {Text,Button,Box} from '@chakra-ui/react'
import InitialFocus4 from "../Login/PostComponent/PostComment";

export default function PCard({image, name, username,question,option1,option2,option3,option4, profession, description, hashtags, image2}) {
  const [data, setdata] = useState([]);

  const [state, setState]= useState(5)

 
  const updateCount = () => {
 

    

    setState((prevState) => prevState + 1);

 


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
                {/* <img src={image2} alt="postimg" /> */}
                 <Text>{question}</Text>
              </div>
                 <Box display='flex' flexDirection='column' mt="10px" mb="10px" gap='5px'>
                    <Button display='flex' onClick={(event)=>{
                        event.target.style.backgroundColor="blue";
                    event.target.style.color="white"

            

                    }} justifyContent="start" ><Text>1. </Text> {option1}</Button>
                 <Button display='flex' onClick={(event)=>{
                    event.target.style.backgroundColor="blue"
                    event.target.style.color="white"

                    }} justifyContent="start" ><Text>2. </Text> {option2}</Button>
                 <Button display='flex' onClick={(event)=>{
                    event.target.style.backgroundColor="blue"
                    event.target.style.color="white"

                    }} justifyContent="start" ><Text>3. </Text> {option3}</Button>
                 <Button display='flex' onClick={(event)=>{
                    event.target.style.backgroundColor="blue"
                    event.target.style.color="white"

                    }} justifyContent="start" ><Text>4. </Text> {option4}</Button>
                 </Box>
                  
              <div className="cont5">
                <img
                  src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
                  alt="comment"
                />
                <div><InitialFocus4/></div>
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
                  <a href="https://www.kooapp.com/img/Whatsapp1.5.svg">
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
