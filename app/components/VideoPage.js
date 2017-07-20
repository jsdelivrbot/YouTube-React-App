import React from 'react';
import VideoSearch from 'VideoSearch';
import VideoList from 'VideoList';
import VideoDetail from 'VideoDetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const YT_API_KEY  = 'AIzaSyAFX9MnZY1OAey9tcUQt_oskvt6hHnH4Xk';
const defaultSearchTerm = 'surfing'



class VideoPage extends React.Component
{

  constructor(props)
  {
     super(props);
     this.state = { videos:[], selectedVideo:null };

     this.handleSearchTerm(defaultSearchTerm);
  }

  handleSearchTerm = (term) =>
  {
    YTSearch({ key:YT_API_KEY, term: term }, (videos) =>
    {
        this.setState({videos:videos, selectedVideo:videos[0]});
    })
  }

  render()
  {
    //throttle input
    const handleSearchTerm = _.debounce((term) => { this.handleSearchTerm(term) }, 300)

    return(
              <div>
                  <h3>This is the video page</h3>
                  <VideoSearch onSearchTerm = { handleSearchTerm }/>
                  <VideoDetail video = { this.state.selectedVideo }/>
                  <VideoList videos = { this.state.videos } onVideoSelect = { selectedVideo => this.setState({selectedVideo:selectedVideo})} />
              </div>
           )
  }

}

export default VideoPage;
