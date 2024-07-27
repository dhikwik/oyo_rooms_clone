import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './QuickSearch.css';
const lurl="https://oyoapi-6pq8.onrender.com/states"

class QuickSearch extends Component{

    constructor(props) {
        super(props);
        console.log("constructor")


        this.state={
            location:'',
            loading: true
            
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
                {this.state.loading ? (
                    <div className="loader">
                            <img src="https://i.ibb.co/Gds0JKs/gif.gif" alt="gif"/>
                             <div className="loader-text">Loading...</div> 
                    </div>
                        ) : (
                            this.renderCity(this.state.location)
                        )}                    
                     
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
            this.setState({loading:false})
        })
}
}
export default QuickSearch