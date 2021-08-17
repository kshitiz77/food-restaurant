import React from 'react'
import './Menu.css'
import Product from './Product'
function Menu() {
    return (
        <div className="menu">
            <div className="menu__row">
            <Product 
                id="101"
                title="Chilli Paneer"
                price={200}
                image="img/chilli paneer.jpeg"
            />
            <Product 
                id="102"
                title="Chilli Mashroom"
                price={100}
                image="img/chillimashroom.jpeg"
            />
            <Product 
                id="103"
                title="Chilli Patato"
                price={50}
                image="img/chilli patato.jpeg"
            />
            <Product 
                id="104"
                title="Palak Paneer"
                price={50}
                image="img/palakpaneer.jpeg"
            />
            </div>
        </div>
    )
}

export default Menu
