import React from 'react'
import { SectionWrapper } from '../../../style'

/**
* @author
* @class SectionWrap
**/

const SectionWrap = (props) => {

    return (
        <SectionWrapper>{props.children}</SectionWrapper>
    )
}

SectionWrap.propTypes = {}

export default SectionWrap