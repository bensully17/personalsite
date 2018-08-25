import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Fa } from 'mdbreact';

class CardExample extends React.Component {
  render() {
    return (
      <Card cascade>
        <CardImage cascade className="img-fluid" src="./skilyft.png" />
        <CardBody cascade>
            <CardTitle>SkiLyft</CardTitle>
            <CardText>An app to coordinate rides to ski resorts.</CardText>
            <Button href="#">Button</Button>
        </CardBody>
     </Card>
    )
  }
}

export default CardExample