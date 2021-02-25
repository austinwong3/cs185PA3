import {Component} from 'react'
import Tab from './Tab'
import './TabList.css'

class TabList extends Component {
    createTab(tab){
        if(this.props.activeId == tab.id)
            return <Tab active={true} id = {tab.id} title = {tab.title} changeTab = {this.props.changeTab}/>
        else
            return <Tab active={false} id = {tab.id} title = {tab.title} changeTab = {this.props.changeTab}/>
    }
    render(){

        
        return(
            <div className='tabList'>
                {this.props.tabs.map((tab) => this.createTab(tab))}
            </div>
        )
    }
}

export default TabList