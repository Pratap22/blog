import React from 'react';
import '../Body';
import './Common.css';
import { Image } from 'semantic-ui-react';
const Nepal = () => {
  return (
    <div>
      <div className="image-header">
        <Image src="/img/np7.jpg" fluid rounded />
        <h2 className="image-text">
          <span className="image-span">
            Welcome to Nepal: <br /> The land of Himalayas and Temples{' '}
          </span>
        </h2>
      </div>
      <div className="flexrow center-xs">
        <div className="col-lg-4 col-md-4 end-lg end-xs end-sm end-md">
          <img className="nepal-gif" alt="Nepal" src="/img/nepal.gif" />
        </div>
        <div className="col-lg-8 col-md-8 ">
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
          <p>
            Nepal, the landlocked multiethnic, multilingual, multi-religious country, is situated north of India in the
            Himalayas, in the region where, about 40 to 50 million years ago, the Indian subcontinent has crashed into
            Asia. Because of that accident, Nepal has some of the world's highest mountains including Sagarmatha (Mt.
            Everest, 8848m, which it shares with Tibet (by now a province of China). The highest mountain on Earth is
            towering above populated valleys and forested plains.
          </p>
          <div className="flexrow image-div">
            <img className="col-lg-6 col-md-6 col-sm-6 col-xm-12 image-size" alt="Nepal" src="/img/np1.jpg" />
            <img className="col-lg-6 col-md-6 col-sm-6 col-xm-12 image-size" alt="Nepal" src="/img/np2.jpg" />
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
      <div />
    </div>
  );
};
export default Nepal;
