import React, { useEffect, useState } from 'react'
import { Videos } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(Videos);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
     {
      videos.map(video=><VideoCard info={video}/>)
     }
    </div>
  )
}

export default VideoContainer
