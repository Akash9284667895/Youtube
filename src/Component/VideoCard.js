import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-5 w-60 h-96 shadow-lg flex flex-col">
      <img className="rounded-lg w-full h-3/5" alt="thumbnail" src={info.snippet.thumbnails.high.url} />
      <div className="flex-1">
        <div className="font-bold py-2">{info.snippet.title}</div>
        <div>{info.snippet.channelTitle}</div>
        <div>{info.statistics.viewCount} Views</div>
      </div>
    </div>
  );
};

export default VideoCard;
