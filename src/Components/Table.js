import {Component} from 'react'
import './Table.css'

class Table extends Component{
    render(){
        return(
            <div class="tablepage">
            <h1 class="title">Projects</h1>

            <table class="projectTable">
                <tr>
                <th class="nameHead">Name</th>
                <th class="detailsHead">Details</th>
                <th class="yearHead">Year</th>
                </tr>
                <tr>
                <td><a href="https://github.com/ReciPull/recipull.github.io">Recipull</a></td>
                <td>Developed Web/Amazon Alexa app that accepts a list of ingredients and displays recipes that utilize those ingredients. 
                        Responsible for frontend design and interfacing using React and JavaScript including user experience. 
                        Tested all frontend component states with Jest Testing Framework, assuring states are accurate prior to posting for backend. 
                        Worked with a team of six to build a full-stack React, Java, MySQL environment. </td>
                <td>2019</td>
                </tr>
                <tr>
                <td><a href="https://github.com/rhiannaso/SpoilAlert">SpoilAlert</a></td>
                <td>Developed and tested Android application to track perishable goods and their expirations dates with a house social feature. 
                        Responsible for Firebase database management, Google OAuth integration, and notification customization feature. 
                        Integrated computer vision functionality to identify and log foods via image using the Clarifai API. 
                        Ranked 2nd ‘Best in Show’ in Android Development Course .</td>
                <td>2020</td>
                </tr>
            </table>
        </div>
        )
    }    
}

export default Table