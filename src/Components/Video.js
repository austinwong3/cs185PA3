import {Component} from 'react'
import './Video.css'

import vid1 from "./vids/driverslicense.mp4"
import vid2 from "./vids/clintonk.mp4"
import vid3 from "./vids/tswiz.mp4"
import vid4 from "./vids/farewell.mp4"
import vid5 from "./vids/julianbye.mp4"

class Video extends Component{
    showOverlay = (e, src) =>{
        e.preventDefault();
        document.getElementById("overlayVid").src = src;
        document.getElementById("overlay").style.display = "flex";
        
    }
    
    hideOverlay = () =>{
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlayVid").src ="";
    }

    render(){

        var videos = [
            {
                src: vid1
            },
            {
                src: vid2
            },
            {
                src: vid3
            },
            {
                src: vid4
            },
            {
                src: vid5
            }
        ]
        
        return(
            <div className = "videoPage">
                <div class="overlay" id="overlay" onClick={this.hideOverlay}>
                    <video controls="true" class="overlayVid" id="overlayVid" src=""></video>
                </div>

                <div class="videopage">
                    {videos.map((video) => <video controls="true" onClick={(e) => this.showOverlay(e, video.src)} class="ytVideo" src={video.src} frameborder="0" ></video>)}
                </div>
            </div>
        )
    }
}

export default Video