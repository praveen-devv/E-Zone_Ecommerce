import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'

function Order({order}) {
    return (
        <div className="order">
            <p>{moment.unix(order.data.created).format("MMMM D ,h:mma")}</p>
            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    features={item.features}
                    rating={item.rating}
                    hideButton
                />
            ))}
        </div>
    )
}

export default Order
