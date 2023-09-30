import React from 'react'

import { ChessProvider } from '../../Context/ChessContext'

/**
 * The entire application
 */
const App: React.FC = () => {
  const message = 'Hello World!'

  return (
    <ChessProvider>
      <div>
        <h1>{message}</h1>
      </div>
    </ChessProvider>
  )
}

export default App
