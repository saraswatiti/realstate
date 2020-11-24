import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HeaderGroupAct } from '../../../style';


/**
* @author
* @function RightMenu
**/

const RightMenu = (props) => {
    return (
        <HeaderGroupAct>
            <div className='plist_wishlist'>
                <a href="#"><FaRegHeart /><span className='count'>0</span></a>
            </div>
            <div className="site_header_account">
                <Link to="">
                    <FaRegUser />
                    Login/Registor
                </Link>
            </div>
        </HeaderGroupAct>
    )

}

export default RightMenu