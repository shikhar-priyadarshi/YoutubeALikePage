import React,{Component} from 'react';
import Svg from './svg';
import './Input.css';
import { Button, InputGroup } from 'react-bootstrap';

class Input extends Component{
    state={
        SearchText:""
    }
    handle(event){
        this.setState({SearchText:event.target.value});
    }
    click(){
        
        let value=(this.state.SearchText==="")?"Javascript Tutorial":this.state.SearchText;
        this.props.searchText(value);
    }
    render(){
        return(
            <div className="m-4">
            <InputGroup.Append>
            <input className="w-100 text-center" placeholder={" Enter your Search"}  
            onChange={(e)=>this.handle(e)} value={this.state.searchText}/>
            <Button variant="outline-white border border-secondary" onClick={()=>this.click()}><Svg/></Button>
            </InputGroup.Append>
            </div>
        )
    }
}          
export default Input;
