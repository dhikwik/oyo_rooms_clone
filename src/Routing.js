import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listing';

import Details from './component/Details/resDetails';
import ViewOrder from './component/Booking/viewOrder';
import PlaceOrder from './component/Booking/placeOrder';
import Login from './component/Login/login';
import Register from './component/Login/register';
import Form from './component/Login/form';
import Joinoyo from './component/Navbar/joinoyo';
import Member from './component/Navbar/member';
 
const Router = () => {
    return(
        <>
            <BrowserRouter> 
            
                <Route exact path="/" component={Home}/> 
                <Route exact path="/listing/:state_id" component={Listing}/> 
                <Route exact path="/details" component={Details}/>
                <Route exact path="/vieworder" component={ViewOrder}/>
                <Route exact path="/placeOrder/:hotel_name" component={PlaceOrder}/>
                <Route path="/form" component={Form}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/joinoyo" component={Joinoyo}/>

                <Route path="/member" component={Member}/>


                <Footer/>
            </BrowserRouter>  
        </>
    )
}

export default Router