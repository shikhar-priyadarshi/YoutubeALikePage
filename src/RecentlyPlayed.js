import React,{Component} from 'react';
import List from './List';
import {Card, Button} from 'react-bootstrap';
class RecentlyPlayed extends Component{
    render(){
        return(
            <div className="col-6">
            <div className="lead ">
              Recently played
            </div>
            
            <List Page={this.props.Page}
            recentlyPlayed={this.props.recentlyPlayed}     
            play={(id)=>this.props.play(id)}
            />
            
            </div>
        )
    }
}
            
export default RecentlyPlayed;