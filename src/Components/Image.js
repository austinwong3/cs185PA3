import {Component} from 'react'
import './Image.css'

import img1 from './images/im1.JPG'
import img2 from './images/im2.JPG'
import img3 from './images/im3.JPG'
import img4 from './images/im4.JPG'
import img5 from './images/im5.JPG'
import img6 from './images/im6.JPG'


class Image extends Component{
    componentDidMount(){
        document.onscroll = this.scrollFunction
    }

    showOverlay(src){
        document.getElementById("overlayImg").src = src;
        document.getElementById("overlay").style.display = "flex";
    }
    
    hideOverlay(){
        document.getElementById("overlay").style.display = "none";
    }
    
    scrollToTop()
    {
        window.scroll({
            top: 0, 
            behavior: 'smooth'
          });
    
    }

    scrollFunction() {
        var mybutton = document.getElementById("scrollTop");
        if (document.body.scrollTop > window.innerHeight/4 || document.documentElement.scrollTop > window.innerHeight/4) {
          mybutton.style.display = "block";
          console.log("hi")
        } else {
          mybutton.style.display = "none";
        }
      }
    
    render(){
        
        var loop = [1,2,3]
        var imgs = [
            {
                src: img1,
                alt: "im1"
            },
            {
                src: img2,
                alt: "im2"
            },
            {
                src: img3,
                alt: "im3"
            },
            {
                src: img4,
                alt: "im4"
            },
            {
                src: img5,
                alt: "im5"
            },
            {
                src: img6,
                alt: "im6"
            }
        ]
        return(
            <div className='imagePage' onScroll = {this.scrollFunction}>
                <button class="scrollTop" id="scrollTop"  onClick={this.scrollToTop}>Scroll To Top</button>
                <div class="overlay" id="overlay" onClick={this.hideOverlay}>
                    <img src="" class="overlayImg" id="overlayImg"/>
                </div>

                <div class="imagepage">
                        {loop.map((loop) => 
                            imgs.map((img) => 
                                <img src={img.src} alt={img.alt} onClick = {() => this.showOverlay(img.src)}/>))}
                </div>
            </div>
        )
    }
}

export default Image