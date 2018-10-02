import React from 'react';
import './Dropdown.css'


const Dropdown = () => {
    return (
        <div>
            <div className='one'>
                <select className='sDropdown jDown'>
                    <option>Asia</option>
                    <option>India</option>
                    <option>Nepal</option>
                    <option>Sri Lanka</option>
                    <option>Bhutan</option>
                    <option>Maldives</option>
                    <option>China</option>
                    <option>Thailand</option>
                    <option>Indonesia</option>
                    <option>Japan</option>
                </select>
                <select className='sDropdown Down'>
                    <option>Europe</option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>Russia</option>
                    <option>Spain</option>
                    <option>England</option>
                </select>
                <select className='sDropdown Down'>
                    <option>Africa</option>
                    <option>South Africa</option>
                    <option>Morocco</option>
                    <option>Egypt</option>
                    <option>Tanzania</option>
                    <option>Madagscar</option>
                    <option>Eritrea</option>
                </select>
                <select className='dropdown Down'>
                    <option >North America</option>
                    <option>Canada</option>
                    <option>USA</option>
                    <option>Mexico</option>
                    <option>Cuba</option>
                    <option>West Indies</option>
                </select>
                <select className='dropdown Down'>
                    <option>South America</option>
                    <option>Brazil</option>
                    <option>Chile</option>
                    <option>Argintia</option>
                    <option>Peru</option>
                    <option>Columbia</option>
                </select>
                <select className='sDropdown Down'>
                    <option>Oceania</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>Fiji</option>
                    <option>Palau</option>
                    <option>Tonga</option>
                </select>
                <div className='search'>
                        <input className='ip' type='text' placeholder='Search Destination' />
                        <input id='submit'type='submit' value='Search' />
                </div>
            </div>
        </div>
    )
}

export default Dropdown