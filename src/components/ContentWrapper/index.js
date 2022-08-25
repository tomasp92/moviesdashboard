import React from "react"

import Footer from "../Footer"
import NavBar from "../TopBar";
import ContentRowTop from './../ContentRowTop';
import ContentMiddle from './../ContentMiddle';
import useTheme from './../../hooks/useTheme';
const variable  = true
export default function ContentWrapper() {
    const {darkTheme, toggleTheme, themeStyle} = useTheme()
    
    return(
        <div id="content-wrapper" className="d-flex flex-column" style={themeStyle}>
			<div id="content" style={themeStyle}>
                <NavBar style={themeStyle}/>
			</div>
            <ContentRowTop style={themeStyle} />
            <ContentMiddle style={themeStyle}  />   
            <Footer style={themeStyle} />
            <button style={themeStyle} onClick={toggleTheme}>{ darkTheme ? "go to  white Theme" : "go to dark  Theme" }</button>
		</div>
    )
}