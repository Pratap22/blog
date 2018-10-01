import React from 'react';
import './About.css';
import image from './image.jpg';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

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
            <div className='two justify'>
                <div className='TwoOne'>
                    <div>
                        <div>
                            <img className='imgsize' alt='' src={image} />
                            <p className='pblock'> <a className='text'>Namche Bazaar:</a> The village is located on crescent shaped mountain slopes that offer stunning views of the mountains across the valley. It is a grueling 3 to 4 hour climb up from the river to Namche, and at 3,500 metres, it is possible to suffer altitude sickness here. Therefore, it is advisable to spend at least two nights in the village to acclimatize.</p>
                        </div>
                        <div>
                            <img className='imgsize' alt='' src={image1} />
                            <p className='pblock'> Damodar Kunda: <a className='text'>The Damodar Kunda</a> (lake) is famous for Hindu religion. It is situated rain shadow are of High Himalayas north of Annapurna range. The elevation of the Damodar Kunda is just 4890 meters; it is cold and windy place. We will recommend you to visit during the full moon of August because a big festival occurs every year where thousands of Hindu and Buddhist pligrmages visit. Usually, you may visit April to September every year. Festival time will be great for the visit to Damodar Kund. The Tibetan plateau & Damodar Himal to the north and the Annapurna Himalayan massive to the south can be seen clearly. The Damodar lakes are located three Daywalk from north east of the main Mustang trekking route & very close to Tibetan border. Damodar Kunda lies on restricted upper mustang between Kagbeni and Muktinath.</p>
                        </div>
                        <div>
                            <img className='imgsize' alt='' src={image2} />
                        </div>
                        <div>
                            <img className='imgsize' alt='' src={image3} />
                        </div>
                        <div>
                            <img className='imgsize' alt='' src={image4} />
                        </div>
                    </div>
                </div>
                <div className='TwoTwo'>
                    <article className="article ">
                        <form className='measure center'>
                            <div>
                                <legend className='signin'>Sign In</legend>
                            </div>
                            <div className='epInput'>
                                <label className="pLabel" htmlFor='email'>Email</label>
                                <input className='iInput b ph3 pv2 input-reset ba b--black' name='email' 
                                type='email' placeholder='email'required/>
                            </div>
                            <div className='epInput'>
                                <label className='pLabel' htmlFor='password' >Password</label>
                                <input className='iInput b ph3 pv2 input-reset ba b--black' name='password' 
                                type='password' placeholder='password' required/>
                            </div>
                            <input className='dim' type='submit' value='Sign In'/>
                            <input type='button' href="" className="dim" value='Register' />
                        </form>
                    </article>
                </div>
            </div>
        </div>
    )
}
export default About