import { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export const SelectionContext = createContext({})

export function SelectionProvider({ children }) {
  const [state, setState] = useState('')
  const [area, setArea] = useState('')
  const [action, setAction] = useState('')

  useEffect(() => {
    Cookies.set('state', String(state))
    Cookies.set('area', String(area))
    Cookies.set('action', String(action))
  }, [state, area, action])

  return (
    <SelectionContext.Provider value={{
      state: '', setState,
      area: '', setArea,
      action: null, setAction
    }}>
      {children}
    </SelectionContext.Provider>
  )
}