import React, { ReactNode } from 'react'

import { ChessHook, useChessHook } from './useChessHook'

interface ChessContext {
  game: ChessHook
}

const chessContext = React.createContext<ChessContext>(undefined as unknown as ChessContext)

/**
 * Custom hook that throws an error when chessContext is used outside of an
 * ConversationsProvider component
 * @returns the chess context
*/
export const useChessContext = (): ChessContext => {
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

  const value = {
    game: chessHook
  }

  return (
    <chessContext.Provider value={value}>
      {children}
    </chessContext.Provider>
  )
}
