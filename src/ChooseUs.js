import React from 'react'
import { Col, Row } from 'react-bootstrap'
import rely from './rely.png'
import skill from './skilled.png'
import gurant from './gurant.png'
import './ChooseUs.css'
import RemoveIcon from '@material-ui/icons/Remove';

function ChooseUs() {
    return (
        <div className="chooseus">
            <div className="chooseus_desc">
                <RemoveIcon fontSize='large' style={{width:'250px',height:"80px",color:"#153144"}}/>
                <h1>Why Choose Us</h1>
                <p>There are variety of reasons why our clients choose Sysco Systems as their first choice.</p>
            </div>
            <Row>
                <Col lg={4} xs={12} className="chooseus_cont">
                    <img src={rely} className="chooseus_img"/>
                    <h3>Reliable Services</h3>
                    <p>Every service our employees provide is guaranteed to be prompt & reliable.</p>
                </Col>
                <Col lg={4} xs={12} className="chooseus_cont">
                    <img src={skill} className="chooseus_img"/>
                    <h3>Skilled Employees</h3>
                    <p>All the experts at E-Zone have the skills & experience to get the job done right.</p>
                </Col>
                <Col lg={4} xs={12} className="chooseus_cont">
                    <img src={gurant} className="chooseus_img"/>
                    <h3>Licensed & Certified</h3>
                    <p>For your safety and peace of mind, we're fully licensed, certified, and insured!</p>
                </Col>
            </Row>
        </div>
    )
}

export default ChooseUs
