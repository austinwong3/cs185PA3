import {Component} from 'react'
import './Tab.css'

class Tab extends Component {

    render(){
        return(
        <div>
            {this.props.active? <p className='activeTab' onClick = {() =>this.props.changeTab(this.props.id)}>{this.props.title}</p>:<p className="tab" onClick = {() =>this.props.changeTab(this.props.id)}>{this.props.title}</p>}
        </div>)
    }
}

export default Tab