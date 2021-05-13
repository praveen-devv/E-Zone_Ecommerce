import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import './Stabilizers.css'
import s1 from './Stabilizers/arizor.png'
import s2 from './Stabilizers/vdi.png'
import s3 from './Stabilizers/vew.png'
import s4 from './Stabilizers/veb.png'
import s5 from './Stabilizers/vg50.png'
import s6 from './Stabilizers/crystal.png'
import s7 from './Stabilizers/vg100.png'
import s8 from './Stabilizers/vgmew.png'
import s9 from './Stabilizers/vgsd.png'
import s10 from './Stabilizers/vgsjw.png'

function Stabilizers() {
    return (
        <div className="stabilizers">
            <Row>
                <Col lg={3} xs={12} md={6}>
                    <Product id="s1" title="Arizor 4150" image={s1} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-Metal" rating={5}/>
                </Col>
                <Col lg={3} xs={12} md={6}>
                    <Product id="s2" title="VDI400" image={s2} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-ABS"  rating={5}/>                
                </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="s3" title="VEW400" image={s3} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-Metal"  rating={4}/>
                    </Col> 
                <Col lg={3} xs={12} md={6}>
                <Product id="s4" title="VEB400 DIGITAL" image={s4} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-Metal"  rating={5}/>
                     </Col>
            </Row>
            <Row>
                <Col lg={3} xs={12} md={6}>
                <Product id="s5" title="VG 50" image={s5} features="Capacity-2 Ampere,Warranty-5 Years,Cabinet Material-ABS" rating={4}/>
                 </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="s6" title="CRYSTAL NANO" image={s6} features="Capacity-1 Ampere,Warranty-3 Years,Cabinet Material-ABS" rating={4}/>
                </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="s7" title="VG 100" image={s7} features="Capacity-4 Ampere,Warranty-5 Years,Cabinet Material-ABS" rating={4}/>
               </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="s8" title="VGMEW 500" image={s8} features="Capacity-15 Ampere,Warranty-2 Years,Cabinet Material-Metal" rating={4}/>
               </Col>
            </Row>
            <Row>
                <Col lg={6} xs={12} md={6}>
                <Product id="s9" title="VGSD 100" image={s9} features="Capacity-4 Ampere,Warranty-5 Years,Cabinet Material-ABS" rating={4}/>
                 </Col>
                <Col lg={6} xs={12} md={6}>
                <Product id="s10" title="VGSJW 100" image={s10} features="Capacity-4 Ampere,Warranty-5 Years,Cabinet Material-ABS" rating={4}/>
                </Col>
                
            </Row>
        </div>
    )
}

export default Stabilizers
