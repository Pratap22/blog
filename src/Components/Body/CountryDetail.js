import React, { Component } from 'react';
import CityDetail from './CityDetail';

class CountryDetail extends Component {
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

  getImage(images) {
    var imagesArr = [];
    images.forEach((image, index) => {
      imagesArr.push(
        <img
          key={`city-image-${index}`}
          className="col-lg-6 col-md-6 col-sm-6 col-xm-12 ui image image-size"
          alt="placeImages"
          src={image}
        />
      );
    });
    return imagesArr;
  }

  render() {
    const country = this.props.country;
    const cd = country.countryDetail;
    const cid = cd.cities;
    return (
      <div>
        <div className="image-header">
          <img alt={country.countryName} className="ui fluid rounded image" src={cd.headerImage} />
          <h2 className="image-text">
            <span className="image-span">
              Welcome to {country.countryName} : <br /> {cd.headerText}{' '}
            </span>
          </h2>
        </div>
        <div className="center-xs">
          <div className="flexrow center-xs">
            <img className="nepal-gif" alt="Nepal" src={country.flag} />
            <h1 className="start-lg start-md h1-height">{country.countryName} </h1>
          </div>
          <h3 className="h3-height">{cd.caption}</h3>
        </div>
        <div className="ui card">
          <div className="content">
            <div className="header">Nepal</div>
            <div className="meta">
              <span>Land of Cultures</span>
            </div>
            <div className="ui list">{this.getHighlights(cd.highlights)}</div>
            <p>{cd.shortDesc}</p>
            <div className="flexrow image-div">{this.getImage(cd.images)}</div>
            <p>{cd.longDesc}</p>
          </div>
        </div>
        <div className="center-xs">
          <h3 className="h3-height">Destinations to visit in {country.countryName}</h3>
        </div>
        <CityDetail cities={cid} />
      </div>
    );
  }
}
export default CountryDetail;
