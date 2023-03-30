import React from 'react';
import Sidebar from '../Sidebar';

import "../Layout/layout.scss"

function Layout({ content: Component, ...rest }) {
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

        </div>
        </div>
    );
}

export default Layout;