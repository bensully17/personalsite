import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Fa } from 'mdbreact';

class CardExample extends React.Component {
  render() {
    return (
      <Card cascade>
        <CardImage cascade className="img-fluid" src="./skilyft.png" />
        <Button floating tag="a" className="ml-auto mr-4 lighten-3 mdb-color" action><Fa icon="chevron-right"></Fa></Button>
        <CardBody cascade>
            <CardTitle>SkiLyft</CardTitle>
            <CardText>An app to coordinate rides to ski resorts.</CardText>
            <Button href="#">Button</Button>
        </CardBody>
        <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
          
        </div>
     </Card>
    )
  }
}

export default CardExample