import React from 'react';
import Header from '../../Header';
import PropertyList from '../../Common/PropertyList';
import SectionWrap from '../../Common/SectionWrap';
import SectionTitle from '../../Common/SectionTitle';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    return (
        <div>
            <Header />
            <SectionWrap>
                <SectionTitle sectionTitle="Popular Property Lists" />
                <PropertyList />
            </SectionWrap>

        </div>
    )

}

export default HomePage