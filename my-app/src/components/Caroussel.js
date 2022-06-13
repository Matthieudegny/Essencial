// == Imports
import React from "react";

// data, styles et utilitaires
import '../styles/caroussel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/caroussel.scss'
import Slider from "react-slick";
import MinCard from "../pages/MinCard";
import { TrendingUpTwoTone } from "@mui/icons-material";

const Caroussel = () => {

    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "25vw",
        slidesToShow: 3,
        speed: 550,
        arrows: true,
        

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const items = []

    for (let i = 0; i < 1; i++) {
        items.push(< MinCard key={i} />)
    }

    return (
        <div className="caroussel" >
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
            </Slider>
        </div>
    );
}

export default Caroussel;