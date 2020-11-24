import React, { Component } from 'react'
import { SectionWrapper } from '../../../style'

/**
* @author
* @class SectionWrap
**/

class SectionWrap extends Component {

    render() {
        return (
            <SectionWrapper>{this.props.children}</SectionWrapper>
        )
    }
}


SectionWrap.propTypes = {}
export default SectionWrap