import React from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    
    const [{basket,user,userDetails},dispatch] = useStateValue();
    console.log('>>>>>>>>>>userDetails',userDetails)
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="Delivery Address">
                
                <h1>{userDetails.name ? userDetails.name :''}</h1>
                <h1>{userDetails.mobile? userDetails.mobile:''}</h1>
                <h1>{userDetails.address ? userDetails.address: ''}</h1>
                <h1>{userDetails.city ? userDetails.city : ''}</h1>
            </div>
            
        </div>
    )
}

export default Orders
