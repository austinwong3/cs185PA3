import {Component} from 'react'
import './Text.css'

class Text extends Component{
    render(){
        return(
        <div className="textpage">
            <form>
                <div class="nameInput">
                    <label class= "sectiontitle" for="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" />
                    <br/>

                    <label class= "sectiontitle" for="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName"/>
                </div> 
                
                <div class="movieInput">
                    <label for="movie"/>Please select your favorite movie!<br />
                    <input type="radio" name="movie" value="The Big Sick"/>The Big Sick<br />
                    <input type="radio" name="movie" value="Baby Driver"/>Baby Driver<br />
                    <input type="radio" name="movie" value="The Imitation Game"/>The Imitation Game<br />
                </div>

                <div class="doneButton" >
                    <input type="submit" value="Done"/>
                </div>
            </form>
        </div>
        )
    }
}

export default Text