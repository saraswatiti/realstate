import React, { Component } from 'react'
import { HeroSection, RelativeContainer } from '../../style';
import backgorud from '../../assets/img/house2.jpg';
import Searchbox from '../SearchBox';
import { Row, Col } from 'antd';

/**
* @author
* @class Banner
**/

class Banner extends Component {
    render() {
        return (
            <>
                <HeroSection style={{ backgroundImage: "url(" + `${backgorud}` + ")" }}>
                    <RelativeContainer>
                        <Row justify="center">
                            <Col lg={15}>
                                <h3>{this.props.title}</h3>
                                <Searchbox />
                            </Col>
                        </Row>
                    </RelativeContainer>
                </HeroSection>
            </>
        )
    }
}


export default Banner;