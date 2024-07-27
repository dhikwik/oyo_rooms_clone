import React,{Component} from "react";
import './joinoyo.css'
import Header from '../../Header';


class Joinoyo extends Component{
   
    render(){
        return(
            <>
            <Header/>
            <div>
                    <img src="https://i.ibb.co/jgBjSRk/HAND.webp" alt ="images" id="jbus"/>
                    <div id="jtext">
                        <span>Growing your business </span>
                            <p>is easy</p>
                        <p>JUST FOR YOU</p>
                        <p>Become a OYO in 30 minutes</p>
                        <button class="btn btn-danger"> JOIN NOW</button>
                    </div>
            
             </div>
         
    

            </>
        )
    }
}

export default  Joinoyo;