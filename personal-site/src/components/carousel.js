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

import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class CarouselPage extends Component {
  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Basic example</h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;