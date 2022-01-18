import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade variant="dark">
            <Carousel.Item >
                <img 
                className="d-block w-40"
                src="./crousal1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-40"
                src="./crousal2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </div>
  );
}

export default SliderImages;