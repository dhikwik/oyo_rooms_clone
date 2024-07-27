import React,{Component} from 'react';
import axios from 'axios';
// import OrderDisplay from './orderDisplay';
import Header from '../../Header';


// const url = "https://oyoapi-6pq8.onrender.com/orders";


class ViewOrder extends Component{
    // constructor(props){
    //     super(props);

    //     // this.state={
    //     //     orders:''
    //     // }
    // }
  
    render(){
        // if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <div className="thank-you">
                    <h1 className="text-center">Thanks for the booking</h1>
                    <img src="https://i.ibb.co/N6jkMq0/green-tick.png" alt="tick"/>
                    </div>
                </>

            )
        // }
        // return(
        //     <>
        //         <Header/>
        //         <OrderDisplay orderData={this.state.orders}/>
        //     </>
        // )
    }

    
 
    // componentDidMount(){
    //     let email = sessionStorage.getItem('userInfo').split(',')[1]

    //     axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    // }
}

export default ViewOrder;