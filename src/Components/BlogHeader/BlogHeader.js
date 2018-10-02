import React from 'react';
import './BlogHeader.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import globe from './globe.gif';

const BlogHeader = () => {
    return (
        <div>
            <div className='header-content'>
                <div className='globe-size'>
                    <img alt='Globe' src={globe}/>
                </div>
                <div className='welcome'>
                    <h1>World Destinations</h1>
                    <p>Welcome to World Destinations! Explore every destinations of the world.</p>
                </div>
                <div>
                    <div>
                        <ul className="social-icons"> 
                            <li><a id='fb' href="http://www.facebook.com/prataps22" target="_blank" rel='noopener noreferrer' ><img alt='facebook' src={facebook} /></a></li>
                            <li><a href="https://twitter.com/Pratap2210" target="_blank" rel='noopener noreferrer'><img alt='twitter' src={twitter} /></a></li>
                            <li><a href="https://www.linkedin.com/in/prataps22/" target="_blank" rel='noopener noreferrer'><img alt='linkedin' src={linkedin} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogHeader