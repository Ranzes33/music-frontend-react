import { Link } from "react-router-dom";
import { Footer } from '../../ui/Footer';
import { MainCarousel } from "../../ui/Carousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

export const HomePage = () => {
  return (
    <div className='menuInicio'>
      <h1 
        className="animate__animated animate__flash mt-5 mb-4" >
        Bienvenido a Music App
      </h1>
      <MainCarousel/>
      <h3 
        className="animate__animated animate__backInLeft mt-4 mb-4">
        "Toda tu música favorita, en un solo lugar"
      </h3>
      <Link 
        to="/menu" 
        className="btn animate__animated animate__bounce mt-2" 
        style={{ color: 'white', background:'purple'}} 
        size='lg'>
          Iniciar
      </Link>
      <Footer/>
    </div>

  )
}
