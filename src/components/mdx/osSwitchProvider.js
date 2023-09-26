// import React from 'react'
import { useState, createContext, useContext } from 'react'

const OsContext = createContext({ os: '', setOs: () => {} })

const OsSwitchProvider = ({ children }) => {
  const [os, setOs] = useState('macos')

  return <OsContext.Provider value={{ os, setOs }}>{children}</OsContext.Provider>
}

export default OsSwitchProvider

export const OsSwitch = ({ options }) => {
  const { os, setOs } = useContext(OsContext)
  const changeHandler = (event) => setOs(event.target.innerText.toLowerCase())

  return (
    <>
      <div className="flex space-between">
        {options.map((option) => {
          return (
            <button className="bg-sea hover:bg-purple" key={option} onClick={changeHandler}>
              {option}
            </button>
          )
        })}
      </div>
    </>
  )
}

export const OsWrapper = ({ children }) => {
  const { os } = useContext(OsContext)

  console.log(children)

  const content = children.filter((item) => {
    return item.key === os
  })

  return <>{content}</>
}
