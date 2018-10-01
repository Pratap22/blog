import React, {Component} from 'react';
import BlogHeader from './Components/BlogHeader/BlogHeader.js';
import About from './Components/About/About.js';

class App extends Component {
    render(){
        return (
            <div>
                <BlogHeader />
                <About />
                {/* <Signin />
                <Register /> */}
            </div>
        )

    }
}
export default App