import React,{Component} from "react";
import axios from "axios";
import ListingDisplay from './listingDisplay';
import Covid from './covid';
import './listing.css';
import CategoryFilter from '../Filter/categoryFilter'
import CostFilter from '../Filter/costFilter'
import Header from '../../Header';



const hotelUrl= "https://oyoapi-6pq8.onrender.com/hotel/"


class Listing extends Component {
    constructor(props){
        super(props);
        this.state={ 
            hotelData:''

        };
    }

    setDataPerFilter = (data) => {
        this.setState({hotelData:data})
    }

    render(){
        return(
            <>
            <Header/>
            <div className="rw">
                <div className="name">
                    <Covid/>
                    <div className="filter">
                        <center>
                            Filter
                        </center>
                        <CategoryFilter state_id={this.props.match.params.state_id}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        <CostFilter  state_id={this.props.match.params.state_id}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="containerr">
                    <ListingDisplay listData={this.state.hotelData}/>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }

    //api function

    
    componentDidMount(){
        let stateId = this.props.match.params.state_id;
        axios.get(`${hotelUrl}${stateId}`)
            .then((res) => {this.setState({hotelData:res.data})})
        }

}

export default  Listing;