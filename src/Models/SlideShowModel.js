import React, { Component } from 'react';
import './SlideShow.css';

class SlideShowModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    };
  }
  images = img => {
    return this.props.images.forEach((curval, i) => {
      <img src={curval} />;
    });
  };

  showdDivs = n => {
    var i;
    var x = this.props.images;
    var dots = x.length;
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x;
    }
    for (i = 0; i < x; i++) {
      x[i].style.display = 'none';
    }
    for (i = 0; i < dots; i++) {
      x[i].className.replace('white', '');
    }
    x[this.slideIndex - 1].style.display = 'blocks';
    dots[this.slideIndex - 1].className += ' white';
  };

  plusDivs = n => {
    this.showdDivs((this.slideIndex += n));
  };
  currentDiv = n => {
    this.showdDivs((this.slideIndex = n));
  };

  render() {
    this.showdDivs(this.state.slideIndex);
    return (
      <div>
        <div className="content display-container">
          <img className="mySlides width" src={this.images(this.props.images)} />
          <div className="width center container section large text-white display-bottom-middle">
            <div className="left hover-text-khaki" onClick={this.plusDivs(-1)}>
              &#10094{' '}
            </div>
            <div className="right hover-text-khaki" onClick={this.plusDivs(1)}>
              {' '}
              &#10095{' '}
            </div>
            <span className="badge" onClick={this.currentDiv(1)} />
            <span className="badge" onClick={this.currentDiv(2)} />
            <span className="badge" onClick={this.currentDiv(3)} />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShowModel;
