import React,{Component} from 'react';
 import {Link,withRouter} from 'react-router-dom';
import './Header.css'

const url = "https://zomato0login.herokuapp.com/api/auth/userinfo";

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            userData:''
            
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus','loggedOut');
        sessionStorage.removeItem('ltk');
        this.setState({userData:''})
        this.props.history.push('/')
        
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
             
                let data = this.state.userData;
                let outArray = [data.name,data.email,data.phone,data.role]
                sessionStorage.setItem('userInfo',outArray);
                sessionStorage.setItem('loginStatus','loggedIn');
                return(
                    <>
                         <li className="dive"><a><img src="https://img.icons8.com/ios-glyphs/30/000000/user-male--v1.png" className="icon" alt="alt" onClick={this.handleLogout}/><span>Hi {data.name}/Log Out</span></a></li> 

                    </>
                )
            }     
        else{
            return(
                <>
                    <li><Link to="/form"><img src="https://img.icons8.com/ios-glyphs/30/000000/user-male--v1.png" className="icon" alt="alt"/><span> Sign Up/log in</span></Link></li>

                    
                </>
            )
        }
    }

    render(){
        return(
            <nav className="navbar navbar-default">
            <nav className="container-fluid">
         
            <span className="navbar-brand mb-0 h1" id="oyo"><Link to="/"><img src="https://i.ibb.co/YtjDm16/OYO-Blog-Image.png" className="head"/></Link></span>
            <div className="lovedive">

              <ul className="nav navbar-nav navbar-right">
                     <li className="dive"><Link to="/member"><img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-tag-bookmarks-tags-those-icons-fill-those-icons-2.png" alt="alt"className="icon"/> Become a member</Link></li>
                    <li className="dive"><Link to="/joinoyo"><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-building-landscape-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="alt"className="icon"/><span> List your properties</span></Link></li>
    
                    <li className="dive"><a href="#"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-world-web-and-social-media-flatart-icons-outline-flatarticons.png" alt="alt" className="icon"/><span> English</span></a></li>
                    {this.conditionalHeader()}

    
                   </ul>
            </div>
                   
                  </nav>
        </nav>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}


export default withRouter(Header)
