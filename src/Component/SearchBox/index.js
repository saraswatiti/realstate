import React, { Component } from 'react';
import { Input, Row, Col, Select, Slider, Button, Form } from 'antd';
import { SearchWrap, Container } from '../../style';
import props from 'prop-types';

const { Option } = Select;





class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
        }
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    inputHandle = (e) => {
        this.setState(e.target.value);
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        props.history.push({
            pathname: "/search",
            search: `?q=${this.state.searchKey}`,
        })

    }
    render() {
        return (
            <SearchWrap>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col xs={24} sm={16} md={12} lg={6}>
                                <Select defaultValue="Apartment" style={{ width: '100%' }} onChange={this.handleChange}>
                                    <Option value="rent">Rent</Option>
                                    <Option value="Sell">Sell</Option>
                                    <Option value="Yiminghe">Apartment</Option>
                                </Select>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={14}>
                                <Input placeholder="Street, City, State, Zip or keyword" onChange={this.inputHandle} />
                            </Col>
                            <Col xs={24} lg={4}>
                                <Button type='submit'>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </SearchWrap>
        )
    }
}
export default Searchbox;