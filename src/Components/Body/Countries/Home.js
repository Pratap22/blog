import React from 'react';
import '../Body';
import './Common.css';
import { Grid, Image } from 'semantic-ui-react';

const Home = () => {
  return (
    <div>
      <Grid>
        <Grid.Column mobile={16} tablet={6} computer={6}>
          <Image className="ui image imgSize" src="img/in1.jpg" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Image className="ui image imgSize" src="img/np1.jpg" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Image className="ui image imgSize" src="img/np5.jpg" />
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Home;
