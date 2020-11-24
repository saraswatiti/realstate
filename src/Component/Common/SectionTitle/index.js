import React from 'react'

/**
* @author
* @class SectionTitle
**/

const SectionTitle = ({ sectionTitle }) => {

    return (
        <header className="sectionheading">
            <h2>{sectionTitle}</h2>
        </header>

    )
}

SectionTitle.propTypes = {}

export default SectionTitle