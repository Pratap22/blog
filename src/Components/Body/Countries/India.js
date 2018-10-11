import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './Common.css';

const India = () => {
  return (
    <div>
      <h1>This Is India </h1>
      <Grid>
        <Grid.Column mobile={16} tablet={6} computer={6}>
          <Image className="ui image imgSize" src="img/in1.jpg" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Image className="ui image imgSize" src="img/in2.jpg" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Image className="ui image imgSize" src="img/in3.jpg" />
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default India;
