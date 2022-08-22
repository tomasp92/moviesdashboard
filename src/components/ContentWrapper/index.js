import React from "react"

import Footer from "../Footer"
import NavBar from "../TopBar";
import ContentRowTop from './../ContentRowTop';
import ContentMiddle from './../ContentMiddle';

export default function ContentWrapper() {
    return(
        <div id="content-wrapper" className="d-flex flex-column" style={{ backgroundColor: 'black' }}>
			<div id="content" style={{ backgroundColor: 'black' }}>
                <NavBar style={{ backgroundColor: 'black' }}/>
			</div>
            <ContentRowTop style={{ backgroundColor: 'black' }} />
            <ContentMiddle style={{ backgroundColor: 'black' }} />   
            <Footer style={{ backgroundColor: 'black' }}/>
		</div>
    )
}