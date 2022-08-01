import slide1 from './../docs/assets/img/slide1.13e31a47.png';
import slide2 from './../docs/assets/img/slide2.06771c95.png';
import slide3 from './../docs/assets/img/slide3.beab38fd.png';
import Carousel from 'react-bootstrap/Carousel';

export const MainCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-150"
                    src= {slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Hits de la semana</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-150"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Lo mejor de los 80 y 90</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-150"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2>Los más populares en otros continentes</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
