import React from 'react';
import '../Body';
import './Common.css';
import { Item, List, Image } from 'semantic-ui-react';
const Nepal = () => {
  return (
    <div>
      <div>
        <Image src="/img/np7.jpg" fluid rounded />
      </div>
      <Item.Group>
        <Item>
          <Item.Image size="large" src="/img/np6.jpg" />
          <Item.Content>
            <Item.Header as="a"> Pokhara Phewa Lake</Item.Header>
            <Item.Description>
              <List>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">An excellent place for boating and evening walk</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">An excellent place for boating and evening walk</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">An excellent place for boating and evening walk</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Item.Description>
            <Item.Extra id="countryFont">
              "Phewa Lake is the second largest lake in Nepal. Its shores are covered with an array of colorful boats.
              One can go for boating, fishing and sailing in this lake. The peace and tranquility of this lake is the
              biggest reason why people visit it. Tourists also go for walks or bike ride along the shores of this lake.
              The biggest attraction of this place is Tal Barahi temple. The temple dedicated to the Barahi is situated
              in the middle of the lake where one has to go by a boat. The shadow of a nearby Annapurna range can be
              seen on the surface of the lake. Sitting in the colorful boat and watching the sunrays hit the snowcapped
              mountains gives it a dramatic and beautiful orange hue making it the best scenic view of this place. You
              can also see various colorful fish in the water. The beauty of this place is enchanting and mesmerizing. "
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="large" src="/img/np6.jpg" />
          <Item.Content>
            <Item.Header as="a"> Pokhara Phewa Lake</Item.Header>
            <Item.Description>
              <List>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">An excellent place for boating and evening walk</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">An excellent place for boating and evening walk</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">An excellent place for boating and evening walk</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Item.Description>
            <Item.Extra id="countryFont">
              "Phewa Lake is the second largest lake in Nepal. Its shores are covered with an array of colorful boats.
              One can go for boating, fishing and sailing in this lake. The peace and tranquility of this lake is the
              biggest reason why people visit it. Tourists also go for walks or bike ride along the shores of this lake.
              The biggest attraction of this place is Tal Barahi temple. The temple dedicated to the Barahi is situated
              in the middle of the lake where one has to go by a boat. The shadow of a nearby Annapurna range can be
              seen on the surface of the lake. Sitting in the colorful boat and watching the sunrays hit the snowcapped
              mountains gives it a dramatic and beautiful orange hue making it the best scenic view of this place. You
              can also see various colorful fish in the water. The beauty of this place is enchanting and mesmerizing. "
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};
export default Nepal;
