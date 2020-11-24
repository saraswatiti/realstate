import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardWrap } from '../../../style'

/**
* @author
* @class Card
**/

class Card extends Component {
    state = {}
    render() {
        return (
            <CardWrap>{this.props.children}</CardWrap>
        )
    }
}


Card.propTypes = {}
export default Card