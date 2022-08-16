import React from "react"

import Footer from "../Footer"
import NavBar from "../TopBar";
import ContentRowTop from './../ContentRowTop';
import ContentMiddle from './../ContentMiddle';

export default function ContentWrapper() {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
                <NavBar />
			</div>
            <ContentRowTop />
            <ContentMiddle />   
            <Footer />
		</div>
    )
}