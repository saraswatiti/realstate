import React from 'react';
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';
import Banner from '../Banner'

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div>
            <TopHeader />
            <MainHeader />
            <Banner title="Find a property today" />
        </div>
    )

}

export default Header