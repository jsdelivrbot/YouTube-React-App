import React from 'react';
import VideoListItem from 'VideoListItem';

const VideoList = (props)=>
{
  
   const handleSelectVideo = (id) =>
   {
     console.log("play id " + id)
   }

   const videoItems = props.videos.map((video, i) =>
   {
        return <VideoListItem video={ video } key={ video.id.videoId } id={i} />
   })

   return(
         <div>
          <ul className="col-md-4 list-group">
              { videoItems }
          </ul>
        </div>
        )
}

module.exports = VideoList;
