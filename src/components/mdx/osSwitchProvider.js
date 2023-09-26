import React from 'react'
import { useState, createContext, useContext } from 'react'

const OsContext = createContext(null)

const OsSwitchProvider = ({ children }) => {
  return <OsContext.Provider value="">{children}</OsContext.Provider>
}

export default OsSwitchProvider

export const OsSwitch = ({ options }) => {
  const [os, setOs] = useState('macos')
  // const os = useContext(OsContext)

  const handleChange = (event) => {
    console.log(event.target.innerText)
    setOs(() => event.target.key)
  }

  return (
    <>
      <OsContext.Provider value={os}>
        {options.map((option) => {
          return (
            <div key={option}>
              <button key={option} onClick={handleChange}>
                {option}
              </button>
            </div>
          )
        })}
      </OsContext.Provider>
    </>
  )
}

export const OsWrapper = ({ children }) => {
  return children
}
