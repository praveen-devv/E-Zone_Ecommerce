 import React from 'react'
 import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
 
 function CheckoutProduct({id,title,image,features,rating,hideButton}) {
     const [{basket},dispatch] = useStateValue();

    const removeFromCart =() =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    }

     return (
         <div className="checkoutProduct">
             <img className="checkoutProduct_image" src={image}/>
             <div className="checkoutProduct_info">
                 <strong className="checkoutProduct_title">{title}</strong>
                 <p className="checkoutProduct_features">{features}</p>
                 <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                    ))}
                 </div>
                 {!hideButton && (
                     <button onClick={removeFromCart}>Remove from Cart</button>
                 )}
                 

             </div>
             
         </div>
     )
 }
 
 export default CheckoutProduct