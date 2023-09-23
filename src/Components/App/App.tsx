import React from 'react'

import { ChessProvider } from '../../Context/ChessContext'

/**
 * The entire application
 */
const App: React.FC = () => {
  return (
    <ChessProvider>
      <div>
        <h1>Hello World</h1>
      </div>
    </ChessProvider>
  )
}

export default App
