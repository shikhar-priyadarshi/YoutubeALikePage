import React,{Component} from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';
class List extends Component{
 
   filter(id,index){
    this.props.recentlyPlayed.push(this.props.relatedContent[index]);
    let value=this.props.recentlyPlayed;
    this.props.select(id,index,value);
   }
   player(id){
    this.props.play(id)
   }
   bookmark(id){
    this.props.bookmarked.unshift(this.props.relatedContent[id]);
    let val=this.props.bookmarked;
    this.props.bookmark(val);
    }
    render(){
     return(
         <div className='col-4 border-light border'>
             
             {!this.props.Page && this.props.relatedContent.map((value,index)=>
             <Card className='my-2' key={index} style={{ width: '17rem' }}>
             <Card.Img variant="top" src={value.snippet.thumbnails.medium.url} 
             onClick={()=>this.filter(value.id.videoId,index)}
             />
             <Card.Body>
             <Card.Title className="font-weight-normal">{value.snippet.title}</Card.Title>
               <Card.Text className="small">
               {value.snippet.description}
               </Card.Text>
               <Button variant="light border border-dark text-dark"
                onClick={()=>{this.bookmark(index)}}
               >Add bookmark</Button>
             </Card.Body>
           </Card>)}

            {this.props.Page && this.props.Page==='Recents' && this.props.recentlyPlayed.map((value,index)=>
               <Card className='my-2' key={index} style={{ width: '17rem' }}>
               <Card.Img variant="top" src={value.snippet.thumbnails.medium.url} 
               onClick={()=>this.player(value.id.videoId)}
               />
               <Card.Body>
               <Card.Title className="lead">{value.snippet.title}</Card.Title>
                 <Button variant="light border border-dark text-dark">Add bookmark</Button>
               </Card.Body>
             </Card>
             )} 
             

             {this.props.Page && this.props.Page==='Bookmark'
             &&this.props.bookmarked.map((val,ind)=>
             <Card key={ind} style={{ width: '18rem' }}>
             <ListGroup variant="flush">
             <ListGroup.Item>
             <Card.Img variant="top" className='d-inline' src={val.snippet.thumbnails.medium.url} 
              // onClick={()=>this.player(val.id.videoId)}
              style={{ width: '7rem' }}
               />
                      {val.snippet.title}
             </ListGroup.Item>
             </ListGroup>
             </Card>
             )
             }
         </div>
     )
 }
}
export default List;
/**/