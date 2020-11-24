import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import * as PropertyListService from '../../../service/PropertyListService'
import axios from 'axios';
import { rentalnow_api_url } from '../../../config';
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
            const result = await axios.get(`${rentalnow_api_url}/houses?offset=1`)
                .then(res => {
                    const houses = res.data.data;
                    this.setState({ houses });
                })
            return result;

        } catch{
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


// PropertyList.propTypes = {}
export default PropertyList