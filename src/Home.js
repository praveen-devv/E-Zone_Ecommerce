import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import home from './home.jpg'
import Product from './Product'
import s1 from './Stabilizers/arizor.png'
import s2 from './Stabilizers/vdi.png'
import s3 from './Stabilizers/vew.png'
import s4 from './Stabilizers/veb.png'
import s5 from './Stabilizers/vg50.png'

import h1 from './Heaters/ema.png'
import h2 from './Heaters/iris.png'
import h3 from './Heaters/msh.png'
import h4 from './Heaters/pebble.png'
import h5 from './Heaters/sprinhot.png'

import i1 from './Inverter/du3500.png'
import i2 from './Inverter/du10000.png'
import i3 from './Inverter/jaadoo.png'
import i4 from './Inverter/nextgen.png'
import i5 from './Inverter/smart1100.png'
import i6 from './Inverter/smart1500.png'
import i7 from './Inverter/vt250.png'


function Home() {
    return (
        <div className="home">
                <img 
                    className="home__image" 
                    src={home} 
                />
                <div className="home__title">
                    <h3>Voltage Stabilizers</h3>
                    <Link to="/stabilizers">
                        <button className="show_more">VIEW ALL</button>
                    </Link>
                    
                </div>
                <div className="home__row">
                    <Product id="s1" title="Arizor 4150" image={s1} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-Metal" rating={5}/>
                    <Product id="s2" title="VDI400" image={s2} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-ABS"  rating={5}/>
                    <Product id="s3" title="VEW400" image={s3} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-Metal"  rating={4}/>
                    <Product id="s4" title="VEB400 DIGITAL" image={s4} features="Capacity-12 Ampere,Warranty-3 Years,Cabinet Material-Metal"  rating={5}/>
                    <Product id="s5" title="VG 50" image={s5} features="Capacity-2 Ampere,Warranty-5 Years,Cabinet Material-ABS" rating={4}/>
                </div>

                <div className="home__title">
                    <h3>Water Heaters</h3>
                    <Link to="/heaters">
                        <button className="show_more">VIEW ALL</button>
                    </Link>
                </div>
                <div className="home__row">
                    <Product id="h1" title="EMA WATER HEATER" image={h1} features="Capacity-15L/25L,Power-2000W" rating={5}/>
                    <Product id="h2" title="IRIS DG" image={h2} features="Capacity-10L/15L/25L,Power-2000W"  rating={5}/>
                    <Product id="h3" title="STEAMER PLUS MSH" image={h3} features="Capacity-10L,Power-2000W"  rating={4}/>
                    <Product id="h4" title="PEBBLE" image={h4} features="Capacity-6L/10L/15L/25L,Power-2000W"  rating={5}/>
                    <Product id="h5" title="SPRINHOT SERIES" image={h5} features="Capacity-1L/3L,Power-3000W/4500W" rating={4}/>
                 </div>

                 <div className="home__title">
                    <h3>Inverters and Batteries</h3>
                </div>
                <div className="home__row">
                    <Product id="i1" title="DU 3500" image={i1} features="Charging topology Boost mode,Soft start Provided." rating={5}/>
                    <Product id="i2" title="DU 10000" image={i2} features="Soft start Provided,Generator compatibility Provided."  rating={5}/>
                    <Product id="i3" title="JAADOO 800" image={i3} features="Suitable for low voltage areas,Runs juicer/ Mixer Grinder easily"  rating={4}/>
                    <Product id="i4" title="NEXTGEN 1250" image={i4} features="Runs juicer/ Mixer Grinder,USB Charging point is available."  rating={5}/>
                    <Product id="i5" title="SMART 1100" image={i5} features="Mute annoying beeps,Save energy using holiday mode." rating={4}/>
                    <Product id="i6" title="SMART 1500" image={i5} features="Mute annoying beeps,Save energy using holiday mode." rating={4}/>
                    <Product id="i7" title="VT 250" image={i5} features="High pressure ,Long life,Endurance and Excellent performance" rating={4}/>
                 </div>
            
        </div>
    )
}

export default Home
