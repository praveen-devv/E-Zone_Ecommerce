import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReorderIcon from '@material-ui/icons/Reorder'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {  
    const [{basket,user},dispatch] = useStateValue();
    const [showLinks, setShowLinks] = useState(false)

    const handleAuth = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/" >
                <img className="header_logo" src={logo} />
            </Link>
            <div className="header_search" >
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav" id={showLinks ? "hidden" : ""}>
                <Link to="/about" style={{textDecoration:'none'}}>
                    <div className="header_option">
                        <span className="header_optionLineTwo">About</span>     
                    </div>
                </Link>
                <Link to="/contact" style={{textDecoration:'none'}}>
                    <div className="header_option">
                        <span className="header_optionLineTwo">Contact</span>     
                    </div>
                </Link>
                
                <Link to={!user && '/login'} style={{textDecoration:'none'}}>
                    <div className="header_option" onClick={handleAuth}>
                        <span className="header_optionLineOne">Hello {user ? user?.displayName : 'Guest'} </span>
                        <span className="header_optionLineTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders' style={{textDecoration:'none'}}>
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Orders</span>
                    </div>
                </Link>
            </div>
            <Link to={user ? '/checkout' : '/login'} style={{textDecoration:'none'}}>
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
            <button onClick={()=> setShowLinks(!showLinks)}><ReorderIcon /></button>
        </div>
    )
}

export default Header
