import React from 'react';
import './Ad.css';

const Ad = () =>{
    return(
        <React.Fragment>
           <div id ="ad">
                <img src="https://i.ibb.co/vmL0NhR/oyo-ad.png" alt="ad" className="responsive ad"/>
                <img src="https://i.ibb.co/7WB0Hn3/family.jpg" alt="family" className="ad1"/>


            </div>
            
            <div className="second">
                <img src="https://i.ibb.co/tZqwMZW/ad2.png" alt="ad2"  className="secpic"/>

            </div>
            
            <div className="thirdad">
                    <img src="https://i.ibb.co/hHqwg5Z/ad3.png" alt="ad3" id="ad3" width="50%"/>
            </div>
             
         
                 
        </React.Fragment>
    )
}

export default Ad