import React,{Component} from "react";
import './member.css'
import Header from '../../Header';


class Member extends Component{
 
    render(){
        return(
            <>
            <Header/>
            <div>
                <img src="https://i.ibb.co/QdcysKV/night.jpg" alt ="images" id="mbus"/>
                <div id="mtext">
                    <span>Join the 2 million+</span>
                        <p>member club now</p>
                    <p>Save more with</p>
                    <p>Wizard membership</p>
                    <button class="btn btn-danger"> Join wizard for Rs 99</button>
                    <button class="btn btn-info">Join  gold wizard for Rs 399</button>
                </div>
        
            </div>
            
    

            </>
        )
    }
}

export default  Member;