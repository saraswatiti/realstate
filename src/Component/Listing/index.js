import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Container } from '../../style';
import props from 'prop-types';
import ImgSlider from '../Common/ImgSlider';
import Card from '../Common/Card'
import { Link } from 'react-router-dom';
import { BiBed, BiBath } from "react-icons/bi";



class Listing extends Component {

    render() {
        const { houses } = this.props;
        console.log(houses);
        return (
            <Container>
                <Row>
                    {houses.map((house) => (
                        <Col key={house.id} lg={8} sm={6} xs={24} >
                            <Card>
                                <ImgSlider alttitle={house.title} imgArray={house.images} price={house.rent} />
                                <h3><Link to="/">{house.title}</Link></h3>
                                <BiBed />
                                <BiBath />
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container >
        )
    }
}
export default Listing;