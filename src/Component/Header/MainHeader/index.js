import React, { Component } from 'react';
import { MenuCon, Container, MenuBar } from '../../../style';
import { Button, Drawer } from 'antd';
import Navigation from '../Navigation';
import RightMenu from '../RightMenu';
import VerticleMenu from '../VerticleMenu';

class MainHeader extends Component {
    state = {
        current: 'home',
        visible: false
    }

    showDrawer = () => {
        this.setState({ visible: true });
    };

    onClose = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <nav>
                <MenuBar>
                    <Container className="Wrap">
                        <div className="logo">
                            <a href="/#">RentalNow</a>
                        </div>
                        <MenuCon>
                            <div className="leftMenu">
                                <Navigation />
                            </div>
                            <div className="rightMenu">
                                <RightMenu />
                            </div>
                            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                                <span className="barsBtn"></span>
                            </Button>
                            <Drawer
                                title="Basic Drawer"
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >

                                <VerticleMenu />
                            </Drawer>
                        </MenuCon>
                    </Container>
                </MenuBar>
            </nav>
        )
    }
}

export default MainHeader;