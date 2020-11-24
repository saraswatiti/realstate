import React from 'react'
import { CardWrap } from '../../../style'

/**
* @author
* @class Card
**/

const Card = (props) => {
    return (
        <CardWrap>{props.children}</CardWrap>
    )
}


Card.propTypes = {}
export default Card