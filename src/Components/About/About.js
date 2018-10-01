import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='justify'>
            <div className='one'>
                <select className='dropdown'>
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
                <select className='dropdown'>
                    <option>Europe</option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>Russia</option>
                    <option>Spain</option>
                    <option>England</option>
                </select>
                <select className='dropdown'>
                    <option>Africa</option>
                    <option>South Africa</option>
                    <option>Morocco</option>
                    <option>Egypt</option>
                    <option>Tanzania</option>
                    <option>Madagscar</option>
                    <option>Eritrea</option>
                </select>
                <select className='dropdown'>
                    <option>North America</option>
                    <option>Canada</option>
                    <option>USA</option>
                    <option>Mexico</option>
                    <option>Cuba</option>
                    <option>West Indies</option>
                </select>
                <select className='dropdown'>
                    <option>South America</option>
                    <option>Brazil</option>
                    <option>Chile</option>
                    <option>Argintia</option>
                    <option>Peru</option>
                    <option>Columbia</option>
                </select>
                <select className='dropdown'>
                    <option>Oceania</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>Fiji</option>
                    <option>Palau</option>
                    <option>Tonga</option>
                </select>
            </div>
            <div className='two'>
                <h1 className='content'> It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                    distribution of letters, as opposed to using 'Content here, content here', making it look 
                    like readable English. Many desktop publishing packages and web page editors now use 
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many 
                    web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like).
                </h1>
            </div>
            
        </div>
    )
}
export default About