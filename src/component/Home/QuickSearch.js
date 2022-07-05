import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './QuickSearch.css';
const lurl="https://oyodhiksha.herokuapp.com/states"

class QuickSearch extends Component{

    constructor(props) {
        super(props);
        console.log("constructor")


        this.state={
            location:''
            
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    
                    <Link to={`/listing/${item.state_id}`} key={item.state_id}>

 
                <span value={item.state_id} key={item.state_id}>{item.state_name}</span>
                </Link>
 
                )
            })
        }
    }
    render(){
    return(
        <>
            <div id="location">
                <div className="dropdown">
                    {this.renderCity(this.state.location)} 
                    
                     
                </div>
            </div>
        </>
    )
}
componentDidMount(){
    console.log("componentdidmount")
    fetch(lurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({location:data})
        })
}
}
export default QuickSearch