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
        
        return(
            <div className = "videoPage">
                <div class="overlay" id="overlay" onClick={this.hideOverlay}>
                    <video controls="true" class="overlayVid" id="overlayVid" src=""></video>
                </div>

                <div class="videopage">
                    <video controls="true" onClick={(e) => this.showOverlay(e, vid1)} class="ytVideo" src={vid1} frameborder="0" ></video>
                    <video controls="true" onClick={(e) => this.showOverlay(e, vid2)} class="ytVideo" src={vid2} frameborder="0" ></video>
                    <video controls="true" onClick={(e) => this.showOverlay(e, vid3)} class="ytVideo" src={vid3} frameborder="0" ></video>
                    <video controls="true" onClick={(e) => this.showOverlay(e, vid4)} class="ytVideo" src={vid4} frameborder="0" ></video>
                    <video controls="true" onClick={(e) => this.showOverlay(e, vid5)} class="ytVideo" src={vid5} frameborder="0" ></video>
                    
                </div>
            </div>
        )
    }
}

export default Video