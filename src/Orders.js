import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';
import firebase from 'firebase'
import Order from './Order';

function Orders() {


    var firestore = firebase.firestore();
    
    const [{basket,user,userDetails},dispatch] = useStateValue();

    const [orders, setOrders] = useState([])

    const docRef=firestore.collection('users').doc(user?.uid).collection('Orders');

    useEffect(() => {
        if(user){
            docRef.orderBy('created','desc').onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id:doc.id,
                    data:doc.data()
                })))
            ))
            
        }
        else{
            setOrders([])
        }
            
    }, [user])
    console.log('Order>>>>>>>',orders);
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {orders?.map(order => (
                        <Order order={order}/>
                ))}
            </div>
            <p style={{textAlign:'center',fontSize:'20px'}}>Thanks for the interest,Our Company will contact you.</p>
            
        </div>
    )
}

export default Orders
