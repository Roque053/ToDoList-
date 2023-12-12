import { createContext, useContext, useState, useEffect } from "react"


const AppContext = createContext()


const AppProvider = ({ children }) => {

    const [tarea, setTarea] = useState('')

    return (
        <AppContext.Provider
            value={{
                newTask,
                setTarea
            }}>

            {children}

        </AppContext.Provider>)
}


export const useApp = () => useContext(AppContext)


export default AppProvider
