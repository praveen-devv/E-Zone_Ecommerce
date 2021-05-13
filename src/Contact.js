import React from 'react'
import './Contact.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import { Row, Col ,Card } from "react-bootstrap";



function Contact() {
    return (
        <div className="contact">
            <Row>
                <Col lg={3} xs={12} md={6}>
                    <Card className="contact_info">
                        <Card.Body>
                            <LocationOnIcon className="contact_icon" fontSize="large"/>
                            <h5 class="card-title">Main Address</h5>
                            <h6>293,5th Street Extension, Gandhipuram,Coimbatore,<br></br>Tamil Nadu 641012</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={12} md={6}>
                    <Card className="contact_info">
                        <Card.Body>
                            <AccessTimeIcon className="contact_icon" fontSize="large"/>
                            <h4>Working Hours</h4>
                            <h6>Mon-Sat:10AM-8PM</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={12} md={6}>
                    <Card className="contact_info">
                        <Card.Body>
                            <EmailIcon className="contact_icon" fontSize="large"/>
                            <h4>Email Address</h4>
                            <h6>hellosysco@gmaill.com</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={12} md={6}>
                    <Card className="contact_info">
                        <Card.Body>
                            <LocalPhoneIcon className="contact_icon" fontSize="large"/>
                            <h4>Phone Numbers</h4>
                            <h6>For Customers:0422 437 1979</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Contact
