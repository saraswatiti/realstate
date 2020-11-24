import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../config';
import Listing from '../../Listing';

/**
* @author
* @class PropertyList
**/

class PropertyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
        };
    }

    async componentDidMount() {
        try {
            const result = await axios.get(`${config.baseURL}/houses?offset=1&limit=12`)
                .then(res => {
                    const houses = res.data.data;
                    this.setState({ houses });
                })

            return result;

        } catch {
            console.error();
        }
    }

    render() {
        return (
            <div>
                <Listing houses={this.state.houses} />
            </div>
        )
    }
}

PropertyList.propTypes = {

}

export default PropertyList