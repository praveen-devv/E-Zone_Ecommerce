import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import './Heaters.css'

import h1 from './Heaters/ema.png'
import h2 from './Heaters/iris.png'
import h3 from './Heaters/msh.png'
import h4 from './Heaters/pebble.png'
import h5 from './Heaters/sprinhot.png'
import h6 from './Heaters/steamer.png'
import h7 from './Heaters/veehot.png'
import h8 from './Heaters/verano.png'
import h9 from './Heaters/victo.png'
import h10 from './Heaters/vhot.png'

function Heaters() {
    return (
        <div className="heaters">
            <Row>
                <Col lg={3} xs={12} md={6}>
                <Product id="h1" title="EMA WATER HEATER" image={h1} features="Capacity-15L/25L,Power-2000W" rating={5}/>
                     </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="h2" title="IRIS DG" image={h2} features="Capacity-10L/15L/25L,Power-2000W"  rating={5}/>
                    
                </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="h3" title="STEAMER PLUS MSH" image={h3} features="Capacity-10L,Power-2000W"  rating={4}/>
                             
                    </Col> 
                <Col lg={3} xs={12} md={6}>
               
                <Product id="h4" title="PEBBLE" image={h4} features="Capacity-6L/10L/15L/25L,Power-2000W"  rating={5}/>
                    </Col>
            </Row>
            <Row>
                <Col lg={3} xs={12} md={6}>
                <Product id="h5" title="SPRINHOT SERIES" image={h5} features="Capacity-1L/3L,Power-3000W/4500W" rating={4}/>
                      
                </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="h6" title="STEAMER-PLUS-EC" image={h6} features="Capacity-6L/10L/15L/25L,Power-2000W" rating={4}/>
                </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="h7" title="VEEHOT SERIES" image={h7} features="Capacity-3L,Power-3000W" rating={4}/>
               </Col>
                <Col lg={3} xs={12} md={6}>
                <Product id="h8" title="VERANO DG" image={h8} features="Capacity-15L/25L,Power-2000W" rating={5}/>
               </Col>
            </Row>
            <Row>
                <Col lg={6} xs={12} md={6}>
                <Product id="h9" title="VICTO PLUS" image={h9} features="Capacity-6L/10L/15L/25L,Power-2000W" rating={4}/>
                 </Col>
                <Col lg={6} xs={12} md={6}>
                <Product id="h10" title="V-HOT-NON PRESSURIZED SERIES" image={h10} features="Capacity in Litres per Day-100LPD/125LPD/150LPD/200LPD/250LPD/300LPD,Number of Persons using hot water-2 to 9" rating={4}/>
                </Col>   
            </Row>
            
        </div>
    )
}

export default Heaters
