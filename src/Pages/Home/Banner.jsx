import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/banner.css'
import banner1 from '../../assets/home/banner1.jpeg';
import banner2 from '../../assets/home/banner2.webp'
import banner3 from '../../assets/home/banner3.webp'
import banner4 from '../../assets/home/banner4.jpeg'
import banner5 from '../../assets/home/banner5.webp'
import banner6 from '../../assets/home/banner6.jpeg'

const Banner = () => {
    return (
        <Carousel>
        <div><img src={banner1} /></div>
        <div><img src={banner2} /></div>
        <div><img src={banner3} /></div>
        <div><img src={banner4} /></div>
        <div><img src={banner5} /></div>
        <div><img src={banner6} /></div> 
    </Carousel>
    );
};

export default Banner;