import React from 'react';

const VideoDetail = ({video}) =>
{
   if(!video)
   {
     return <div>Videos loading...</div>
   }

   const videoID = video.id.videoId;
   const YT_URL = `https://www.youtube.com/embed/${videoID}`;

   return ( <iframe src={ YT_URL}> { video.snippet.title } </iframe>)
}

module.exports = VideoDetail;
