import React,{Component} from 'react';
import axios from 'axios';

const curl="https://oyodhiksha.herokuapp.com/category"

const url = "https://oyodhiksha.herokuapp.com/filter";

class CuisineFilter extends Component {

    constructor(props) {
        super(props);
         


        this.state={
            category:''
            
        }
    }

    filterCategory = (event) => {
        let categoryId = event.target.value;
        // sessionStorage.setItem('cuisine',cuisineId)
        let stateId = this.props.state_id
        let cuisineUrl = ""
        if(categoryId === ""){
            cuisineUrl = `${url}/${stateId}`
        }else{
            cuisineUrl = `${url}/${stateId}?category=${categoryId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})

    }

    renderCategory = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    
                    

 
                    <label className="checkbox">
                    <input type="checkbox" value={item.category_id} name={item.category_name} key={item.category_id}/>{item.category_name}
                </label>
                
 
                )
            })
        }
    }
    render(){
        return(
            <>
                <center>Cuisine Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCategory}>
                    
                    {this.renderCategory(this.state.category)} 
                </div>
            </>
        )
    }

    componentDidMount(){
        
        fetch(curl,{method:'GET'})
            .then((res) =>  res.json())
            .then((data) => {
                this.setState({category:data})
            })
    }
}


export default CuisineFilter