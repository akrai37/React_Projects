import React, { useState, useContext } from 'react'  // 'useContext' has to be used everywhere beacuse it allows us to create context.

const AppContext = React.createContext(); //this is the format

const AppProvider = ({ children }) => {
    const [isSidebaropen, setIsSidebaropen] = useState(false);
    const [isModalopen, setIsModalopen] = useState(false);

    const openSideBar = () => {
        setIsSidebaropen(true);
    }                          
    const closeSideBar = () => {
        setIsSidebaropen(false);
    }
    const openModal = () => {
        setIsModalopen(true);
    }
    const closeModal = () => {
        setIsModalopen(false);
    }
    return <AppContext.Provider value={{ //we have to place everything that we have defined in the 'value'. '.Provider' is the property that holds the 'value'
        isModalopen, isSidebaropen,
        openSideBar, closeSideBar, openModal, closeModal
    }}>{children}</AppContext.Provider> //{children} is also part of the format. we ahve to place it like this.
}

export const useGlobalContext = () => { //this is a custom hook that allows us to define and return functions and use it in any program within the same module without 'prop drilling'.cont.
    return useContext(AppContext);  //we have to place 'use' in front of our fn name like 'useFN', otherwise it won't be considered as custom hook. 
}

export { AppContext,AppProvider}