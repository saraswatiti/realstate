import React from 'react'
import { CardWrap } from '../../../style'

/**
* @author
* @class Card
**/

const Card = () => {
    return (
        <CardWrap>{this.props.children}</CardWrap>
    )
}


Card.propTypes = {}
export default Card