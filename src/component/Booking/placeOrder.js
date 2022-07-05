import React,{Component} from 'react';
import './placeOrder.css';
import axios from "axios";
import Header from '../../Header';



const url="https://oyodhiksha.herokuapp.com/details/"
const postData = " https://oyodhiksha.herokuapp.com/placeOrder"



class PlaceOrder extends Component {

    constructor(props){
        super(props);

        let userData = sessionStorage.getItem('userInfo')

        
        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.hotel_name,
            name:userData? userData.split(',')[0]:'',
            email:userData? userData.split(',')[1]:'',
            cost:0,
            phone:userData? userData.split(',')[2]:'',
            noOfDay:'',
            noOfRoom:'',
            date:'',
            details:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.noOfDay = sessionStorage.getItem('day');
        obj.noOfRoom = sessionStorage.getItem('room'); 
        obj.cost = sessionStorage.getItem('cost'); 
        obj.date = sessionStorage.getItem('date'); 

        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewOrder'))
    }
    

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </>

            )
        }
        let {details} = this.state
         
        return(
            <>
                <Header/>
               <div id="pbox">
        <div id="pside1">
 
            <div id="pcoup">
                <center>
                    <p id="word">Yay! you just saved ₹875 on this booking!</p>
                </center>

            </div>
            
            <div id="pdet">
                <div id="penter">
                     <h1 id="pthedetail">Enter your details</h1> 

                </div>
                <div>
                    <h5 id="ptext">We will use these details to share your booking information</h5>
                    <div className="form-group col-md-12">
                        <label for="email" id="email1">Email</label>
                        <input id="eemail" name="email" className="form-control" type="text" onChange={this.handleChange}
                             value={this.state.email}/>
                    </div>
                    <div className="form-group col-md-12">
                        <label for="name" id="name">Full Name</label>
                        <input id="name" name="name" className="form-control" type="text" onChange={this.handleChange}
                         value={this.state.name} />
                    </div>
                    <div className="form-group col-md-12">
                        <label for="phone" id="phone">Phone Number</label>
                        <input id="phone" name="phone" className="form-control" type="text" onChange={this.handleChange}
                             value={this.state.phone} />
                    </div>
                    <button type="button" id="pbut"class="btn btn-success" onClick={this.checkout}> Proceed</button>
                </div>

            </div>

        </div>

        
        <div id="pside2">
            <div id="right">
            <h3 id="phead"> <b>{details.hotel_name}</b></h3>
            <span id="pstar">{details.average_rating} Star</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="pawe">{details.rating_text}</span>
            <img src={details.restaurant_thumb} alt={details.hotel_name}id="ppic"/>
            <div id="ptime">
            <span id="prooms">
                No of Days
            </span>
            <span id="pnum"> {sessionStorage.getItem('day')}</span>
           
            </div>

          
            <div id="ptime">
                <span  id="prooms">
                    No of Rooms
                </span>
                <span id="proomnum">{sessionStorage.getItem('room')}</span>
               
                </div>
            </div>

            <div id="pdate">
                <span id="pdate">
                    Date
                </span>
                <span id="pdatenum">{sessionStorage.getItem('date')}</span>
               
                </div>

             
            <div id="total">
                <span id="ptotal">
                    <b>Total Amount</b>
                </span>
                <span id="ptotalnum"><b>Rs {sessionStorage.getItem('cost')}</b></span>
               
            </div>

            </div>

        </div>


    
            </>
        )
    }

    componentDidMount(){
        let hotel = sessionStorage.getItem('hotel_id')
          
        axios.get(`${url}${hotel}`)
        
            .then((res) => {this.setState({details:res.data[0]})})
            
        }
}



export default PlaceOrder;