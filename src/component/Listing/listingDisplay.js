import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) =>{

const renderData =({listData}) =>{
    if(listData){
        
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <>
                        <div className="card" key={item.hotel_id}>
                        <img src={item.restaurant_thumb} alt={item.hotel_name}className="pic"></img>
                         

                        <div className="context">
                        
                        <p className="subtext1"> {item.hotel_name}</p>
                        <p className="subtext2"> {item.address}</p> 
                        <button className="btn btn-success butto" id="butto">{item.average_rating} <span className="glyphicon glyphicon-star-empty"></span></button>
                        <div class="features">
                            <span class="glyphicon glyphicon-ok">Reception</span>&nbsp;
                            <span class="glyphicon glyphicon-signal">Wifi</span>&nbsp;
                            <span class="glyphicon glyphicon-lock">PowerBackup</span>

                        </div>
                        <p class="rup"> Rs {item.cost}</p>
                        <div class="bbut">
                        <Link to={`/details?restId=${item.hotel_id}`}>
                        <button class="btn btn-secondary swipe">View Details</button>
                        <button class="btn btn-danger swipe" >Book Now</button>
                        </Link>
                        </div>
                        </div>
                        



                        


                        </div>
                    
                        </>
                    )


                    
               })
            }
            else{
                return(
                    <>
                    <div className="nodata">
                        <img src="https://i.ibb.co/jDZXv8s/box.webp" alt="box"/>
                    </div>
                    <h1 className="nodatatext">Sorry.. Data not found</h1>
                    </>
                )
            }
            
        

    }else{
        return(
            <>
            <div className="gif">
            <img src="https://i.ibb.co/Gds0JKs/gif.gif" alt="gif"/>
            </div>
              <h1 className="giftext"> Loading...</h1>
             </>
        )

    }
}


     return(
        <div className="content">
            {renderData(props)}

        </div>
    )

}

export default ListingDisplay