import React,{Component} from 'react';
import axios from 'axios';
const burl="https://oyodhiksha.herokuapp.com/hotel/"
const url = " https://oyodhiksha.herokuapp.com/filter";
//https://oyodhiksha.herokuapp.com/filter/1?lcost=200&hcost=700
class CostFilter extends Component {

    filterCost = (event) => {
        let stateId = this.props.state_id
        let cost = (event.target.value).split('-')
 
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${burl}${stateId}`
        }else{
            costUrl = `${url}/${stateId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})

    }
    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100-500" name="cuisine"/>100-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="500-1000" name="cuisine"/>500-1000
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000-1500" name="cuisine"/>1000-1500
                    </label>
                    <label className="radio">
                        <input type="radio" value="1500-2000" name="cuisine"/>1500-2000
                    </label>
                   
                </div>
            </>
        )
    }
}


export default CostFilter