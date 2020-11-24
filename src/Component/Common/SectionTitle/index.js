import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class SectionTitle
**/

class SectionTitle extends Component {

    render() {
        const { sectionTitle } = this.props;
        return (
            <header className="sectionheading">
                <h2>{sectionTitle}</h2>
            </header>

        )
    }
}


SectionTitle.propTypes = {}
export default SectionTitle