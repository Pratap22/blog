import React, { Component } from 'react';
import './SlideShow.css';

class SlideShowModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  getImage = () => {
    var images = this.props.sliderImage;
    return <img className="slider-image" alt="sliderImage" src={images[this.state.slideIndex]} />;
  };

  goToPrevious = () => {
    if (this.state.slideIndex === 0) {
      this.setState({
        slideIndex: this.props.sliderImage.length - 1
      });
    }
    if (this.state.slideIndex > 0) {
      this.setState({
        slideIndex: this.state.slideIndex - 1
      });
    }
  };

  goToNext = () => {
    var images = this.props.sliderImage;
    if (this.state.slideIndex === images.length - 1) {
      this.setState({
        slideIndex: 0
      });
    }
    if (this.state.slideIndex < images.length - 1) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    }
  };

  dotSelection = n => {
    console.log(n);
    if (n === 0) {
      this.setState({
        slideIndex: 0
      });
    } else if (n === 1) {
      this.setState({
        slideIndex: 1
      });
    } else if ((n = 2)) {
      this.setState({
        slideIndex: 2
      });
    }
  };

  componentDidMount() {
    if (this.props.autoplay) {
      setInterval(this.goToNext, 3000);
    }
  }

  render() {
    return (
      <div>
        {this.getImage()}
        <div className="arrow">
          <i className="angle left icon arrow-direction" onClick={this.goToPrevious} />
          <i className="angle right icon arrow-direction" onClick={this.goToNext} />
        </div>
        {this.props.showDots ? (
          <div className="dots">
            <i className="circle icon selection-dots" onClick={this.dotSelection.bind(this, 0)} />
            <i className="circle icon selection-dots" onClick={this.dotSelection.bind(this, 1)} />
            <i className="circle icon selection-dots" onClick={this.dotSelection.bind(this, 2)} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SlideShowModel;
