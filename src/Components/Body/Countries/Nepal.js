import React from 'react';
import '../Body';
import './Common.css';
// import SlideShowModel from '../../../Models/SlideShowModel';
const Nepal = () => {
  // var images = [`/img/np1.jpg`, `/img/np2.jpg`, `/img/np3.jpg`];

  return (
    <div>
      <div className="image-header">
        <img alt="Nepal" className="ui fluid rounded image" src="/img/np7.jpg" />
        <h2 className="image-text">
          <span className="image-span">
            Welcome to Nepal : <br /> The land of Himalayas and Temples{' '}
          </span>
        </h2>
      </div>
      <div className="flexrow center-xs">
        <div className="col-lg-4 col-md-4 col-xs-2 end-lg end-xs end-sm end-md">
          <img className="nepal-gif center" alt="Nepal" src="/img/nepal.gif" />
        </div>
        <div className="col-lg-8 col-md-8 col-xs-10 ">
          <h1 className="start-lg start-md h1-height">Welcome to Nepal</h1>
        </div>
        <h3 className="h3-height">Where you meet the Himalayas and Cultures</h3>
      </div>
      <div className="ui card">
        <div className="content">
          <div className="header">Nepal</div>
          <div className="meta">
            <span>Land of Cultures</span>
          </div>
          <div className="ui list">
            <div className="item">
              <i className="map marker icon" />
              <div className="content">
                <h3 className="header">
                  The Nepal flag is the only national flag that is not quadrilateral in shape. It is made of two
                  triangles
                </h3>
              </div>
            </div>
            <div className="item">
              <i className="map marker icon" />
              <div className="content">
                <h3 className="header">Nepal is the birthplace of Lord Gautam Buddha </h3>
              </div>
            </div>
            <div className="item">
              <i className="map marker icon" />
              <div className="content">
                <h3 className="header">Nepal has the only living goddess in the world, the Kumari</h3>
              </div>
            </div>
            <div className="item">
              <i className="map marker icon" />
              <div className="content">
                <h3 className="header">Major Part Of Himalayas is In Nepal</h3>
              </div>
            </div>
          </div>
          <p>
            Nepal, the landlocked multiethnic, multilingual, multi-religious country, is situated north of India in the
            Himalayas, in the region where, about 40 to 50 million years ago, the Indian subcontinent has crashed into
            Asia. Because of that accident, Nepal has some of the world's highest mountains including Sagarmatha (Mt.
            Everest, 8848m, which it shares with Tibet (by now a province of China). The highest mountain on Earth is
            towering above populated valleys and forested plains.
          </p>
          <div className="flexrow image-div">
            <img className="col-lg-6 col-md-6 col-sm-6 col-xm-12 ui image image-size" alt="Nepal" src="/img/np1.jpg" />
            <img className="col-lg-6 col-md-6 col-sm-6 col-xm-12 ui image image-size" alt="Nepal" src="/img/np2.jpg" />
          </div>
          <p>
            Somewhere here in the Kapilavastu district, there is a place called Lumbini where in about 500 B.C.E. Queen
            Mayadevi is said to have given birth to Siddhartha Gautama, better known as Buddha.
          </p>
          <p>
            Nepal can be divided broadly into three ecological zones: the lowland, the midland and the highland. The
            altitude of the Himalayan Region (the highland) ranges between 4877 m - 8848 m, It includes 8 of the highest
            14 summits in the world, which exceed altitude of 8000 meters including Mount Everest.
          </p>
          <p>
            The mountain region accounts for about 64 percent of total land area, which is formed by the Mahabharat
            range that soars up to 4877 m and the lower Churia range. The lowland Terai, the flat river plain of the
            Ganges with a belt of marshy grasslands, savannas, and forests, occupies about 17 percent of the total land
            area of the country.
          </p>
        </div>
      </div>
      <div className="center-xs">
        <h3 className="h3-height">Places to visit in Nepal</h3>
      </div>
      <div className="ui items">
        <div className="item">
          <div className="place-image">
            <img alt="Kathmandu" src="/img/np3.jpg" />
            {/* <SlideShowModel images={images} /> */}
          </div>
          <div className="content">
            <a className="header">Kathmandu</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>
                Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of
                the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious
                festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015
                earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being
                rebuilt.
              </p>
            </div>
            <div className="flexrow">
              <div className="ui list col-lg-4 list-items">
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Thamel</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Pashupatinath Temple</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Buddha NilKantha</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Durbar Square</h3>
                  </div>
                </div>
              </div>
              <div className="ui list col-lg-4 list-items">
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Hanuman Dhoka</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Garden of Dreams</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Syambhunath Temple</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Kumari Bahal</h3>
                  </div>
                </div>
              </div>
              <div className="ui list col-lg-4 list-items">
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Hanuman Dhoka</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Garden of Dreams</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Syambhunath Temple</h3>
                  </div>
                </div>
                <div className="item">
                  <i className="caret right icon" />
                  <div className="content">
                    <h3>Kumari Bahal</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nepal;
