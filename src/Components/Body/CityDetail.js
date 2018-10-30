import React, { Component } from 'react';
import SlideShowModel from '../../Slider/SlideShowModel';
import './Body.css'

class CityDetail extends Component {

  getCity(cities) {
    var citiesArr = [];
    cities.forEach((city, index) => {
      citiesArr.push(
        <div key={`city-${index}`}>
          <div className="flexrow div-height">
            <div className="place-image col-md-5 col-lg-5">
            {this.getImages(city.images)}
            </div>
            <div className="col-md-7 col-lg-7">
              <a className="header">{city.name} </a>
              <div className="ui list">{this.getHighlights(city.highlights)}</div>
              <div className="description">
                <p>{city.desc}</p>
              </div>
            </div>
          </div>
          <div className="center-xs">
          <h3 className="h3-height">Places to visit in {city.name}</h3>
        </div>
          <div className="flexrow places-margin">{this.getPlaces(city.name, city.places)}</div>
        </div>
      );
    });
    return citiesArr;
  }
  getHighlights(highlights) {
    var highlightsArr = [];
    highlights.forEach((highlight, index) => {
      highlightsArr.push(
        <div className="item" key={`highlight-${index}`}>
          <i className="map marker icon" />
          <div className="content">
            <h3 className="header">{highlight}</h3>
          </div>
        </div>
      );
    });
    return highlightsArr;
  }
  getImages (images) {
   return <SlideShowModel sliderImage={images} autoplay={false} showDots={true} />

  }
  getSubPlaces(cityName, subPlaces) {
    var placesArr = [];
    subPlaces.forEach((place, index) => {
      placesArr.push(
        <div className="item" key={`${cityName}-place-${index}`}>
          <i className="caret right icon" />
          <div className="content">
            <h3 className="place-detail" onClick={this.getPlaceDetail.bind(this, place)}>{place.name}</h3>
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

  getPlaceDetail (place) {
   console.log(place.name, place.desc)
  }

  render() {
    const city = this.props.cities;
    return <div className="ui items">{this.getCity(city)}</div>;
  }
}
export default CityDetail;
