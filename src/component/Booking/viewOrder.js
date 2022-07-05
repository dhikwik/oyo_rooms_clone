import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';


const url = " https://oyodhiksha.herokuapp.com/orders";


class ViewOrder extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login First To Check Order</h2>
                    </center>
                </>

            )
        }
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    
 
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo').split(',')[1]

        axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;