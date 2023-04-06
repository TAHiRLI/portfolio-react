import React from 'react';
import Sidebar from '../Sidebar';

import "../Layout/layout.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SidebarMobile from '../SidebarMobile';


function Layout({ content: Component, ...rest }) {
    const [isActive, setIsActive] = React.useState(false);
    const handleSidebarMobile =()=>{
        setIsActive(!isActive);
    }
    return (
        <div>
        <div className="container-fluid p-0">

            <div className='d-flex'>
                    <Sidebar/>
                <div className='content'>
                    <div >
                        <Component />
                    </div>
                </div>
            </div>

            <button className='sidebar-btn d-lg-none' onClick={()=>handleSidebarMobile()}><FontAwesomeIcon icon={faBars} /></button>
            <SidebarMobile isActive={isActive}/>
        </div>
        </div>
    );
}

export default Layout;