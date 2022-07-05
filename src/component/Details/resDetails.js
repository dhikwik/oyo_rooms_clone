import React,{Component} from 'react';
 import MenuDisplay from './menuDetails';
 import axios from 'axios';
import './details.css';
import Header from '../../Header';

//import {Link} from 'react-router-dom'
 
const url="https://oyodhiksha.herokuapp.com/details/"
  
 
class Details extends Component{

    constructor(props) {
        super(props)

        this.state={
            details:'',
           noOfDay:'',
           noOfRoom:'',
           date:'',
           cost:' '
        }
    }
     
    // action = () =>{
    //     this.setState({cost : parseInt(this.state.noOfRoom) * parseInt(this.state.noOfDay) });
    //     console.log(this.state.cost)
        

    // }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
        
        // this.order.push(event.target.value)
        // this.order.push(this.state.noOfDay)
        // console.log(this.order)
    }

    proceed = () => {
        sessionStorage.setItem('room',this.state.noOfRoom)
        sessionStorage.setItem('day',this.state.noOfDay)
        sessionStorage.setItem('cost', this.state.details.cost * this.state.noOfRoom *this.state.noOfDay)


        sessionStorage.setItem('date',this.state.date)
        this.props.history.push(`/placeOrder/${this.state.details.hotel_name}`)
    }

            
     
    render() {
         
        let {details} = this.state
        // console.log(details.menu[0])
        console.log(details.menu)
         
        
         
        return(
            <>
                <Header/>
                <div className="hi">
                
                <img src={details.restaurant_thumb} alt={details.hotel_name} class="picd"></img>
                <img src="https://i.ibb.co/4Nh448V/oyo13.jpg" alt={details.hotel_name} class="picd"></img>
                <div className="details">
                    <p className="heading">{details.hotel_name}</p>
                    <p className="subheading">{details.address}</p>

                    <h1>Description</h1>
                    <h6 className="subheading"> With a 24-hour check-in service, CCTV cameras and a breakfast menu that offers a variety of Indian dishes served at any time, guests can explore the city to their heart’s content.

                    </h6>
                    <div className="card1">
                        <div class="img"><img src="https://i.ibb.co/yPhpJFF/oyo14.jpg" alt="simple"/></div>
                        <span className="card-text"> Simple</span>
                         {/* <span className="card-rate">{details.menu[0].price?details.menu[0].price:null}</span>  */}


                    </div>
                    <div className="card1">
                        <div className="img"><img src="https://i.ibb.co/Y765KpL/oyo15.jpg" alt="deluxe"/></div>
                        <span className="card-text"> Deluxe</span>
                        {/* <span class="card-rate">{details.menu[]}</span>  */}



                    </div>
                    <img src="https://i.ibb.co/pzcbyjH/Blog2.png" alt="pic" id="oyoad"/>
                    </div>
                    <div class="payment">
                            <div class="login">
                                <p class="book">Enjoy the stay with us</p>
                            </div>
                            <div class="paycontent">
                            <p class="price">Rs {details.cost}</p>
                            <div> <span class="choose">Choose the date</span> <input type="date"  id="date" name="date" 
                                    value={this.state.date} onChange={this.handleChange} 
                              />
                            </div>
                            

                            <div class="cata">
                            {/* <span class="cat">Your Category</span>
                            <div class="select">
                                <select>
                                    <option>Simple</option>
                                    <option>Deluxe</option>
                                </select>

                            </div> */}
                            </div>
                            
                        
                            <div class="roomno">
                                <center>
                                    <p class="roo">No of rooms </p>
                                     
                                    <input id="noOfRoom" name="noOfRoom" type="number"
                                    value={this.state.noOfRoom} onChange={this.handleChange}
                                       />
                                     
                                    

                                     

                                </center>

                            </div>
                            
                            <div class="roomno">
                                <center>
                                    <p class="roo">No of Days</p>
                                     
                                    <input  id="noOfDay" name="noOfDay" type="number"
                                    value={this.state.noOfDay} onChange={this.handleChange}
                                     
                                      />
                                     
 
                                </center>

                            </div>

                            <div class="box">
                                <span class="boxx"> 800 people booked this OYO in last 6 months<i class="glyphicon glyphicon-fire"></i></span>

                            </div>
                            
                            <div class="pricee"> 
                                <span class="prices">Total Price</span>
                                <span class="pricef">Rs {details.cost * this.state.noOfRoom *this.state.noOfDay} </span>
                                {/* <span class="prices">{this.state.cost}</span> */}
                                  
                                 {/* <span class="pricef">{details.cost*77}</span>  */}
                                
                            </div>
                            
                            <div>
                                <button class="btn btn-success but" id="but" onClick={this.proceed}>Continue to Book</button>

                            </div>
                                
                            </div>
                    </div>
                     
                <MenuDisplay/> 
                </div>
            </>
        )
    }
    async componentDidMount(){
        let restid = this.props.location.search.split('=')[1];
        sessionStorage.setItem('hotel_id',restid)
        let res = await axios.get(`${url}${restid}`)
        // let mealData = await axios.get(`${menuUrl}/${restid}`)
         this.setState({details:res.data[0]})
    }

  
}

export default Details