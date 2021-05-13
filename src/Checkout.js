import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import ModalComponent from './ModalComponent';
import { useStateValue } from './StateProvider';
function Checkout() {
    const [{user,basket},dispatch] = useStateValue();
    
    const [modal, setModal] = useState(false)

    const history = useHistory()
    
    console.log('>>>>>>>>>>>>>>>basket',basket)
    return (

        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">Your Shopping Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            features={item.features}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="Checkout_right">
                <div className="checkout_total">
                    <p>Total ({basket?.length} items)</p>
                    <button onClick={basket.length ? () => setModal(true) : null}>Place Order</button>   
                    <ModalComponent show={modal} onHide={() => setModal(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Checkout
