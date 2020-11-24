import React, { Component } from 'react'
import { Menu } from 'antd';

/**
* @author
* @class Navigation
**/

const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {

    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <a href="/#">Home</a>
                </Menu.Item>
                <SubMenu title={<span>Listing</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="property">
                    <a href="/#">Property</a>
                </Menu.Item>
                <Menu.Item key="blog">
                    <a href="/#">Blog</a>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="/#">Contact Us</a>
                </Menu.Item>
            </Menu>
        );
    }
}



export default Navigation