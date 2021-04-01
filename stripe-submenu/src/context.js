import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebaropen, setIssidebaropen] = useState(false);
    const [isSubmenuopen, setisSubmenuopen] = useState(false);
    const [location, setlocation] = useState({})
    const [page, setPage] = useState({ pages: '', links: [] })
    
    const openSidebar = () => {
        setIssidebaropen(true);
    }
    const closeSidebar = () => {
        setIssidebaropen(false);
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setlocation(coordinates)
        setisSubmenuopen(true);
    }
    const closeSubmenu = () => {
        setisSubmenuopen(false);
    }

    return (
        <AppContext.Provider value={
            {
                isSubmenuopen,
                isSidebaropen,
                openSubmenu,
                closeSubmenu,
                openSidebar,
                closeSidebar,
                location,
                page,
            }
        }>{ children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
