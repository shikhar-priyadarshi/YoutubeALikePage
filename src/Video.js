import React, {Component} from 'react';
class Video extends Component{
 render(){
     return(
         
         <iframe width="700" height="345" src={"https://www.youtube.com/embed/"+this.props.videoId+"?autoplay=1"
         }>
         </iframe>
     )
 }
}
export default Video;