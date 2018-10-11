import React from 'react';
import '../Body';
import './Common.css';
import { Item, Image } from 'semantic-ui-react';

const Bhutan = () => {
  return (
    <Item.Group>
      <Item>
        <Item.Image size="large" src="https://react.semantic-ui.com/images/wireframe/image.png" />

        <Item.Content>
          <Item.Header as="a">Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size="large" src="https://react.semantic-ui.com/images/wireframe/image.png" />

        <Item.Content>
          <Item.Header as="a">Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
export default Bhutan;
