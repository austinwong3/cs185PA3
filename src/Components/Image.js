import {Component} from 'react'
import './Image.css'

import img1 from './images/im1.JPG'
import img2 from './images/im2.JPG'
import img3 from './images/im3.JPG'
import img4 from './images/im4.JPG'
import img5 from './images/im5.JPG'
import img6 from './images/im6.JPG'


class Image extends Component{

    
    render(){
        function showOverlay(src){
            document.getElementById("overlayImg").src = src;
            document.getElementById("overlay").style.display = "flex";
        }
        
        function hideOverlay(){
            document.getElementById("overlay").style.display = "none";
        }
        
        function scrollToTop()
        {
            window.scroll({
                top: 0, 
                behavior: 'smooth'
              });
        
        }
        
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            var mybutton = document.getElementById("scrollTop");
            if (document.body.scrollTop > window.innerHeight/4 || document.documentElement.scrollTop > window.innerHeight/4) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }
        return(
            <div className='imagePage'>
                <button class="scrollTop" id="scrollTop" onClick={scrollToTop}>Scroll To Top</button>
                <div class="overlay" id="overlay" onClick={hideOverlay}>
                    <img src="" class="overlayImg" id="overlayImg"/>
                </div>

                <div class="imagepage">
                        <img src={img1} alt="im1" onClick = {() => showOverlay(img1)}/>
                        <img src={img2} alt="im2" onClick = {() => showOverlay(img2)}/>
                        <img src={img3} alt="im3" onClick = {() => showOverlay(img3)}/>
                        <img src={img4} alt="im4" onClick = {() => showOverlay(img4)}/>
                        <img src={img5} alt="im5" onClick = {() => showOverlay(img5)}/>
                        <img src={img6} alt="im6" onClick = {() => showOverlay(img6)}/>
                        <img src={img1} alt="im1" onClick = {() => showOverlay(img1)}/>
                        <img src={img2} alt="im2" onClick = {() => showOverlay(img2)}/>
                        <img src={img3} alt="im3" onClick = {() => showOverlay(img3)}/>
                        <img src={img4} alt="im4" onClick = {() => showOverlay(img4)}/>
                        <img src={img5} alt="im5" onClick = {() => showOverlay(img5)}/>
                        <img src={img6} alt="im6" onClick = {() => showOverlay(img6)}/>
                        <img src={img1} alt="im1" onClick = {() => showOverlay(img1)}/>
                        <img src={img2} alt="im2" onClick = {() => showOverlay(img2)}/>
                        <img src={img3} alt="im3" onClick = {() => showOverlay(img3)}/>
                        <img src={img4} alt="im4" onClick = {() => showOverlay(img4)}/>
                        <img src={img5} alt="im5" onClick = {() => showOverlay(img5)}/>
                        <img src={img6} alt="im6" onClick = {() => showOverlay(img6)}/>
                        

                </div>
            </div>
        )
    }
}

export default Image