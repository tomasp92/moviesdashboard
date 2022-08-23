import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
const useTheme = ()=>{
    const context = useContext(ThemeContext)
    const themeStyle = context.darkTheme ? {backgroundColor: 'black'} : {}
    return {...context, themeStyle}
}

/* const useGetDarkThemeStyles = () =>{
    const context = useContext(ThemeContext)
    const themeStyle = context.darkTheme ? {backgroundColor: 'black'} : {}
    return themeStyle
}

const useSetTheme = ()=>{
    const context = useContext(ThemeContext)
    return context.toggleTheme
} */

export default useTheme