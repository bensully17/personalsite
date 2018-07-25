// import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap'
// import '../App.css';

// class ControlledCarousel extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleSelect = this.handleSelect.bind(this);

//     this.state = {
//       index: 0,
//       direction: null
//     };
//   }

//   handleSelect(selectedIndex, e) {
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction
//     });
//   }

//   render() {
//     const { index, direction } = this.state;

//     return (
//       <Carousel
//         activeIndex={index}
//         direction={direction}
//         onSelect={this.handleSelect}
//       >
//         <Carousel.Item className='row'>
//           <img className="col-centered" width={200} height={100} alt="900x500" src="/skilyft.png" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item className='row'>
//           <img className="col-centered" width={200} height={100} alt="900x500" src="/skilyft.png" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item className='row'>
//           <img className="col-centered" width={200} height={100} alt="900x500" src="/skilyft.png" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

// export default ControlledCarousel

// import React, { Component } from 'react';
// import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

// class CarouselPage extends Component {
//   render(){
//     return(
//       <Container>
//         <h4 className="mt-5 mb-2">Basic example</h4>
//         <Carousel
//           activeItem={1}
//           length={4}
//           showControls={true}
//           showIndicators={false}
//           className="z-depth-1">
//           <CarouselInner>
//             <CarouselItem itemId="1">
//               <View>
//                 <img className="d-block w-100" src="/skilyft.png" alt="First slide" />
//                 <Mask overlay="black-light"></Mask>
//               </View>
//               <CarouselCaption>
//                 <h3 className="h3-responsive">Light mask</h3>
//                 <p>First text</p>
//               </CarouselCaption>
//             </CarouselItem>
//             <CarouselItem itemId="2">
//               <View>
//                 <img className="d-block w-100" src="/skilyft.png" alt="Second slide" />
//                 <Mask overlay="black-strong"></Mask>
//               </View>
//               <CarouselCaption>
//                 <h3 className="h3-responsive">Strong mask</h3>
//                 <p>Second text</p>
//               </CarouselCaption>
//             </CarouselItem>
//             <CarouselItem itemId="3">
//               <View>
//                 <img className="d-block w-100" src="/skilyft.png" alt="Third slide" />
//                 <Mask overlay="black-slight"></Mask>
//               </View>
//               <CarouselCaption>
//                 <h3 className="h3-responsive">Slight mask</h3>
//                 <p>Third text</p>
//               </CarouselCaption>
//             </CarouselItem>
//             <CarouselItem itemId="4">
//               <View>
//                 <img className="d-block w-100" src="/skilyft.png" alt="Mattonit's item" />
//                 <Mask overlay="black-light"></Mask>
//               </View>
//               <CarouselCaption>
//                 <h3 className="h3-responsive">Sopot Beach</h3>
//                 <p>Taken june 21th by @mattonit</p>
//               </CarouselCaption>
//             </CarouselItem>
//           </CarouselInner>
//         </Carousel>
//       </Container>
//     );
//   }
// }

// export default CarouselPage;

import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';

class MultiCarouselPage extends Component {

  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Multi-item Carousel</h4>
        <Carousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem >
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="/skilyft.png" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="/skilyft.png" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="/skilyft.png" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="2">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="/skilyft.png" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="/skilyft.png" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="3">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default MultiCarouselPage;