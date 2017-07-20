import React from 'react';

const VideoListItem = (props)=>
{
   const {title, description, thumbnails} = props.video.snippet;
   return (
           <li className = "list-group-item" onClick ={(e)=>{ props.handleSelectedVideo(props.video) }} >
                 <h5>{title}</h5>
                 <p>{description}</p>
                 <img src={ thumbnails.default.url } height="90px" width="120px"/>
           </li>
          )
}

module.exports = VideoListItem;
