import React from 'react'

import { ChessProvider } from '../../Context/ChessContext'

import ChessBoard from '../Chessboard'

/**
 * The entire application
 */
const App: React.FC = () => {

  return (
    <ChessProvider>
      <div>
        <ChessBoard />
      </div>
    </ChessProvider>
  )
}

export default App
