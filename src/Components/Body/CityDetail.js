import React, { Component } from 'react';
import SlideShowModel from '../../Slider/SlideShowModel';

class CityDetail extends Component {
  getCity(cities) {
    var citiesArr = [];
    cities.forEach((city, index) => {
      console.log(city.desc);
      citiesArr.push(
        <div className="item">
          <div className="place-image">
            {/* <SlideShowModel sliderImage={this.props.images} autoplay={true} showDots={true} /> */}
          </div>

          <div className="content" key={`city-${index}`}>
            <a className="header">{city.name} </a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>{city.desc}</p>
            </div>
            <div className="flexrow">{this.getPlaces(city.name, city.places)}</div>
          </div>
        </div>
      );
    });
    return citiesArr;
  }
  getSubPlaces(cityName, subPlaces) {
    var placesArr = [];
    subPlaces.forEach((place, index) => {
      placesArr.push(
        <div className="item" key={`${cityName}-place-${index}`}>
          <i className="caret right icon" />
          <div className="content">
            <h3>{place.name}</h3>
          </div>
        </div>
      );
    });
    return placesArr;
  }

  getPlaces(cityName, places) {
    var placesArr = [];
    var placesTotal = places.length;
    var noOfGroups = placesTotal / 4;

    for (var i = 0; i < noOfGroups; i++) {
      var start = i * 4;
      var end = start + 4;
      placesArr.push(places.slice(start, end));
    }
    var placesView = [];
    placesArr.forEach((subPlaces, index) => {
      placesView.push(
        <div key={`${cityName}-group-${index}`} className="ui list col-lg-4 list-items">
          {this.getSubPlaces(cityName, subPlaces)}
        </div>
      );
    });

    return placesView;
  }
  render() {
    const city = this.props.cities;
    console.log(city);
    return <div className="ui items">{this.getCity(city)}</div>;
  }
}
export default CityDetail;
