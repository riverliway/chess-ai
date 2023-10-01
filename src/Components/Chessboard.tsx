import React from 'react'

import { useChessContext } from '../Context/ChessContext'

import { getImagePath } from '../utils/getImagePath'
import { Piece, Player } from '../types'

/**
 * Setting up the chess board at the start of a new game.
 */
const ChessBoard: React.FC = () => {
    const chessContext = useChessContext()
    
    return (
    <div>
        {chessContext.game.board.map(row=>row.map(square=>{
            if (square === undefined) {
                return <div />
            } else {
                return <img src={getImagePath(square.player, square.piece)} /> 
            }
            })
        )} 
    </div>
    )
  }
  
  export default ChessBoard
  