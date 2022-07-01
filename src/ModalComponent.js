import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { db } from './firebase'
import logo from './signin.png'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'
import {v4 as uuidv4} from 'uuid';
import emailjs from 'emailjs-com'

function ModalComponent(props) {

    var firestore = firebase.firestore();

    const [mobile, setmobile] = useState('')
    const [address, setaddress] = useState('')
    const [pincode, setpincode] = useState('')
    const [city, setcity] = useState('')

    const history = useHistory();
    const [{basket,user,userDetails},dispatch] = useStateValue();
    const docRef=firestore.collection('users').doc(user?.uid).collection('Orders').doc(uuidv4());



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

        console.log('>>>>>>>>>>return');
        docRef.set({
            Deliver_Address: {
                Name:user.displayName,
                Mobile:mobile,
                Address:address,
                City:city
            },
            basket: basket,
            created:new Date()
        }).then(function() {
            console.log(">>>>Saved successfully");
        }).catch(function(error){
            console.log(">>>>>error",error);
        })

        console.log(">>>>>>>>>>>baasket>>>>>>",basket)

        var title=[];
        basket.map(value => {
            title.push(value.title)
        })

        const templateParams = {
            date:new Date(),
            name:user?.displayName,
            mobile:mobile,
            address:address,
            city:city,
            title:title

        }

        emailjs.send('gmail','template_7ri8hkl',templateParams,'user_RCRDjutrRULQamGv5rhAM')
            .then((response) => {
                console.log('>>>>>>>>>>Email sent');
            }, (err) => {
                console.log('>>>>>>>>Error sending email')
            })
        


        
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
