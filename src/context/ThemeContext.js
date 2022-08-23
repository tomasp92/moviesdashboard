import React, { createContext } from "react";

const ThemeContext = createContext("no podes acceder al contexto si estas fuera del provider")

function ThemeContextProvider({children}) {
    const [darkTheme, setDarkTheme] = React.useState(true)
    const toggleTheme = ()=>{
        setDarkTheme(!darkTheme)
    }
    return(
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}
