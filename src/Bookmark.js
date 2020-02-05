import React,{Component} from 'react';
import List from './List';
import {Card, Button} from 'react-bootstrap';
class Bookmark extends Component{
    render(){
        return(
            <div className='col-6'>
                <div className='lead'>
                 Bookmark list
                </div>
                <List Page={this.props.Page}
                bookmarked={this.props.bookmarked}
                />
                </div>
        )
    }
}
export default Bookmark;