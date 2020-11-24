import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../ImgSlider/style.css";
import { FigureWrap, PriceAmount } from '../../../style';

/**
* @author
* @class ImgSlider
**/

const ImgSlider = ({ alttitle, imgArray, price }) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                Array.isArray(imgArray) && imgArray.map((imgSlide) => (
                    <FigureWrap key={imgSlide.id}>
                        <img src={imgSlide.image_path} alt={alttitle} style={{ width: '100%' }} />
                        <PriceAmount>{price}</PriceAmount>
                    </FigureWrap>
                ))
            }

        </Slider>
    )
}

ImgSlider.propTypes = {}

export default ImgSlider