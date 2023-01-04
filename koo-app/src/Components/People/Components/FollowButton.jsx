import React from 'react';
import {useState} from "react";
import { Button } from '@chakra-ui/react'
function FollowButton() {
  const [follow,setFollow]=useState("+ Follow");
  const [isFollowed,setisFollowed]=useState(false)
  const handleFollow=()=>{
    setisFollowed(!isFollowed);
    setTimeout(()=>{
      isFollowed ? setFollow("Unfollow") :setFollow(" + Follow")
    },500)
  }
  return (
    <Button color="#fff" bg="#809b9d"  size="sm" onClick={handleFollow}>{follow}</Button>
  )
}

export default FollowButton;