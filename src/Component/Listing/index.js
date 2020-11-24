import React from 'react';
import { Row, Col } from 'antd';
import { Container } from '../../style';
import ImgSlider from '../Common/ImgSlider';
import Card from '../Common/Card'
import { Link } from 'react-router-dom';
import { BiBed, BiBath } from "react-icons/bi";

const Listing = ({ houses }) => {

    return (
        <Container>
            <Row>
                {houses.map((house) => (
                    <Col key={house.id} lg={8} sm={12} xs={24} >
                        <Card>
                            <ImgSlider alttitle={house.title} imgArray={house.images} price={house.rent} />
                            <h3><Link to="/">{house.title}</Link></h3>
                            <span>{house.bedrooms} </span><BiBed />
                            <span> {house.bathrooms} </span><BiBath />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}

export default Listing;