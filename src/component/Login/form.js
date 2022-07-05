import React,{Component} from "react";
import './form.css'
import Header from '../../Header';
import {Link} from 'react-router-dom';

class Form extends Component{

    render(){
        return(
            <>
            <Header/>
            <div id="lbox">
                <center> 
                <Link className="btn btn-primary for" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                    &nbsp;
                    <Link className="btn btn-success for" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                </center>

            </div>
    

            </>
        )
    }
}

export default  Form;