import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { db } from './firebase'
import logo from './signin.png'
import { useStateValue } from './StateProvider'

function ModalComponent(props) {

    const [mobile, setmobile] = useState('')
    const [address, setaddress] = useState('')
    const [pincode, setpincode] = useState('')
    const [city, setcity] = useState('')

    const history = useHistory();
    const [{basket,user,userDetails},dispatch] = useStateValue();

    const placeOrder = () =>{
        dispatch({
            type:'USER_DETAILS',
            item:{
                name:user.displayName,
                mobile:mobile,
                address:address,
                city:city
            }
        })

        db
        .collection('users')
        .doc(user?.id)

        

        dispatch({
            type:'EMPTY_BASKET'
        })

        history.replace('/orders')
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">    
                    <img src={logo} className="login_logoo" />
                    <h3>Contact Details</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <form >
                        <h5>Mobile Number</h5>
                        <input type="tel" value={mobile} onChange={e => setmobile(e.target.value)} style={{width:'100%'}} required/>
                        <h5>Address</h5>
                        <input type="text" value={address} onChange={e => setaddress(e.target.value)} required style={{width:'100%'}}/>
                        <h5>Pincode</h5>
                        <input type="number" value={pincode} onChange={e => setpincode(e.target.value)} required style={{width:'100%'}}/>
                        <h5>City</h5>
                        <input type="text" value={city} onChange={e => setcity(e.target.value)} style={{width:'100%'}}/>

                        <Button onClick={placeOrder} style={{marginBottom:'20px',width:'150px',marginLeft:'auto', marginRight:'auto'}}>Place Order</Button>
                    </form>
                
            </Modal.Body>
        </Modal>
    )
}

export default ModalComponent
