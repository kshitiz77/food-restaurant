import React from 'react'
import './Header.css'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import CartIcon from '@material-ui/icons/ShoppingCart'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom'
function Header() {
    const [{ cart }] = useStateValue();
    return (
        <div className="header">
        
                <div className="header__leftSide">
                    <div className="header__logoIcon">
                        <RestaurantIcon />
                    </div>
                    <div className="header__logoName">
                         <h4>Food Restaurant</h4>
                    </div>
                </div>
                <div className="header__rightSide">
                    <Link to="/checkout">
                    <CartIcon className="cartIcon"/>
                    <span className="header__basketCount">{cart?.length}</span>
                    </Link>
                </div>
 
        </div>
    )
}

export default Header
