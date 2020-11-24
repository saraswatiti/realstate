import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../ImgSlider/style.css";
import PropTypes from 'prop-types'
import { FigureWrap, PriceAmount } from '../../../style';

/**
* @author
* @class ImgSlider
**/

class ImgSlider extends Component {

    render() {
        const { imgurl, alttitle, imgArray, price } = this.props;
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
                            <img src={imgSlide.image_path} alt={alttitle} />
                            <PriceAmount>{price}</PriceAmount>
                        </FigureWrap>

                    ))
                }

            </Slider>

        )
    }
}


ImgSlider.propTypes = {}
export default ImgSlider