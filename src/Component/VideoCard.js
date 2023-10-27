import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  
  return (
    <div className="p-2 m-5 w-60 shadow-lg">
       <img className="rounded-lg" alt="thumbnail" src={info.snippet.thumbnails.medium.url} /> 
      <ul>
        <li className="font-bold py-2">{info.snippet.title}</li>
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
