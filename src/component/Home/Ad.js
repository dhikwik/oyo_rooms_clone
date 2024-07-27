import React from 'react';
import './Ad.css';
   
   
const Ad = () =>{
    return(
        <React.Fragment>
           <div id ="ad">
                <img src="https://i.ibb.co/QMgYGsc/oyo-ad.png" alt="ad" className="responsive ad"/>
                <img src="https://i.ibb.co/sJJv7bm/family.jpg" alt="family" className="ad1"/>
            </div>
   
             <div className="second">
                <img src="https://i.ibb.co/t4C1Jpn/ad2.png" alt="ad2"  className="secpic"/>

            </div>
            
            <div className="thirdad">
                    <img src="https://i.ibb.co/yBrpjTv/ad3.png" alt="ad3" id="ad3" width="50%"/>
            </div>
             
         
                 
        </React.Fragment>
    )
}

export default Ad