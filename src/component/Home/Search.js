import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const lurl="https://oyoapi-6pq8.onrender.com/states"
const rurl="https://oyoapi-6pq8.onrender.com/hotel/"

class Search extends Component{

    constructor(props) {
        super(props);
        console.log("constructor")


        this.state={
            location:'',
            resData: ''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.state_id} key={item.state_id}>{item.state_name}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.hotel_id} key={item.hotel_id}>
                    {item.hotel_name} 
                </option>
                )
            })
        }
    }

    handleRest = (event) => {
        let restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restData:data})
        })
    }

    render(){
        console.log("render",this.state.location)
    return(
        <>
            <div id="search">
                <h1 id="heading">Over 157,000 hotels and homes across 35 countries</h1>
                <select id="city"  className="city" onChange={this.handleCity}>
                <option>-Choose a city-</option>

                {this.renderCity(this.state.location)}  

                </select>
                <select id="hotels" className="hotels" onChange={this.handleRest}>
                <option>-Choose  Your Hotel-</option>

                {this.renderRest(this.state.restData)}

                </select>
            

                <button className="btn btn-success sea" id="go">Search</button>
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

export default  withRouter(Search)