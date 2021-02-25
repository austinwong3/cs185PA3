import {Component} from 'react'
import Text from "./Text"
import Image from "./Image"
import Video from "./Video"
import Table from "./Table"
import Email from "./Email"

class Body extends Component{
    activeTab(){
        if(this.props.activeTab == 1)
            return <Text />
        else if(this.props.activeTab == 2)
            return <Image />
        else if(this.props.activeTab == 3)
            return <Video />
        else if(this.props.activeTab == 4)
            return <Table />
        else if(this.props.activeTab == 5)
            return <Email />
    }
    render(){
        return(this.activeTab())
    }
}

export default Body