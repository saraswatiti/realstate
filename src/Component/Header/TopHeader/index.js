import React from 'react'
import { Row, Col } from 'antd';
import { HeaderTopBar, Container, IconList } from '../../../style';
import 'antd/dist/antd.css';
import { RiTwitterLine, RiFacebookLine, RiYoutubeLine, RiLinkedinLine, RiPhoneLine } from "react-icons/ri";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

/**
* @author
* @function TopHeader
**/

const TopHeader = (props) => {
    return (
        <HeaderTopBar>
            <Container>
                <Row align='middle'>
                    <Col sm={24} md={12} >
                        <IconList >
                            <Link to=""><RiFacebookLine /></Link>
                            <Link to=""><RiTwitterLine /></Link>
                            <Link to=""><RiLinkedinLine /></Link>
                            <Link to=""><RiYoutubeLine /></Link>
                        </IconList>

                    </Col>
                    <Col sm={24} md={12} align="right" className='topbar-right'>
                        <div className="topbar_phone">
                            <a href="tel:0125454569">
                                <RiPhoneLine />
                              (012) 545 4569
                              </a>
                        </div>
                        <Button>Submit property</Button>
                    </Col>
                </Row>
            </Container>
        </HeaderTopBar>
    )

}

export default TopHeader