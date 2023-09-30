import React, { ReactNode } from 'react'

import { ChessHook, useChessHook } from './useChessHook'

const chessContext = React.createContext<ChessHook>(undefined as unknown as ChessHook)

/**
 * Custom hook that throws an error when chessContext is used outside of an
 * ConversationsProvider component
 * @returns the chess context
*/
export const useChessContext = (): ChessHook => {
  const context = React.useContext(chessContext)
  if (context === undefined) {
    throw new Error('useChessContext must be used within the ChessProvider')
  }
  return context
}

/**
 * The chess provider that gets the chess context
 * @prop `children` - node to be rendered once the context is established
 */
export const ChessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const chessHook = useChessHook()

  return (
    <chessContext.Provider value={chessHook}>
      {children}
    </chessContext.Provider>
  )
}
