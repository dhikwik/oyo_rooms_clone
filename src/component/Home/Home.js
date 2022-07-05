import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Ad from './Ad.js';
import Header from '../../Header';




const Home =  (props) => {
    console.log("inside home>>>",props)
    return(
        <>
            
            <Header/>
            <QuickSearch/>
            <Search/>
            <Ad/>
            

        </>
    )
}

export default Home