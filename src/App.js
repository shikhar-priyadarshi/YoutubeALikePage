import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container} from 'react-bootstrap'
import   Input from './Input';
import   List from './List';
import   RecentlyPlayed from './RecentlyPlayed';
import   Bookmark from './Bookmark';
import   Video from './Video';
import   axios from 'axios';
class App extends React.Component{
  
  state={
   searchText:"",
   relatedContent:[],
   videoId:"",
   recentlyPlayed:[],
   bookmarked:[],
   index:0
  }
  search(text){
    let Key="AIzaSyB9eUd4vN6h9eZSZOP0zwbesA9ilU2-efE";
   
   //Api-Key=>
   //AIzaSyB9eUd4vN6h9eZSZOP0zwbesA9ilU2-efE  
   let req=axios.get(`
   https://www.googleapis.com/youtube/v3/search?q=${text}&type=video&maxResults=25&part=snippet&key=${Key}
   `);

  req.then((response)=>{
    console.log(response.data.items);
   this.setState({
    searchText:text, 
    relatedContent:response.data.items
   });
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

 render(){
    return(
      <div>
        <Container>
        <Input  searchText={(searchText)=>this.search(searchText)}/>
        </Container>
        <Container>
          <div className='row'>
          <List relatedContent={this.state.relatedContent}
         recentlyPlayed={this.state.recentlyPlayed}
         bookmarked={this.state.bookmarked}
         select={(id,ind,recent)=>this.setState({videoId:id,
          index:ind,
          recentlyPlayed:recent})}
          bookmark={(val)=>this.setState({
            bookmarked:val
          })}
          />
          <div className='col-8'> 
          <Video videoId={this.state.videoId}/>
           <span className='row mt-2'>
           <RecentlyPlayed Page='Recents'
            recentlyPlayed={this.state.recentlyPlayed}
            play={(id)=>{this.setState({
              videoId:id
            })}}
          />
           <Bookmark Page='Bookmark'
            bookmarked={this.state.bookmarked}      
           />
           </span>
          </div>          
         </div>
        </Container>
      </div>
    )
  }
}

export default App;
//<RecentPlay/>
//<Bookmark/>
        
/*<List/>
        <Video/>
        
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


*/