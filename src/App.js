import React, {Component} from 'react';
import BlogHeader from './Components/BlogHeader/BlogHeader.js';
import About from './Components/About/About.js';
import Dropdown from './Components/Dropdown/Dropdown.js';

class App extends Component {
    render(){
        return (
            <div>
                <BlogHeader />
                <Dropdown />
                <About />
                {/* <Signin />
                <Register /> */}
                <footer className='measure center'> Website Designed by Pratap Sharma</footer>
            </div>
        )

    }
}
export default App