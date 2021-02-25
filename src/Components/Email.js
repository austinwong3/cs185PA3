import {Component} from 'react'
import './Email.css'

class Email extends Component{
    render(){

        function printIt(e){
            e.preventDefault();
            var message = document.getElementById("email").value;
            if(isEmail(message))
            {
                document.getElementById("content").innerHTML = "Email Successfully Recorded (" + message + ")";
            }
            else{
                document.getElementById("content").innerHTML = "Invalid Email Address"
            }
            document.getElementById("email").value = ""
            
        }
        
        
        
        function isEmail(email){
            const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(valid.test(email.toLowerCase()) && email.endsWith(".com" || ".edu"))
                return true;
            return false;
        }

        return(
            <div class="emailpage">
            <form>
                <div class="nameInput">
                    <label class= "sectiontitle" for="email">Email:</label>
                    <input type="text" id="email" name="email"/>
                </div>
        
                <div class="doneButton" >
                    <input id="submitButton" type="submit" value="Done" onClick={(e) => printIt(e)}/>
                </div>
            </form>
            <div id="content"></div>
        </div>)
    }
}

export default Email