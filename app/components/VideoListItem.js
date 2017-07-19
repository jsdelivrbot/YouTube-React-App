import React from 'react';

const VideoListItem = (props)=>
{
   const {title, description, thumbnails} = props.video.snippet;

   return (
           <li className = "list-group-item">
                 <h5>{title}</h5>
                 <p>{description}</p>
                 <img src={ thumbnails.default.url } height="90px" width="120px" onClick ={(e)=>{ console.log("play " + props.id) }}/>
           </li>
          )
}

module.exports = VideoListItem;
