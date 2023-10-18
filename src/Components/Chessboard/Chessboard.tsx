import React from 'react'

import { useChessContext } from '../../Context/ChessContext'

import styles from './Chessboard.module.css'
import ChessSquare from './ChessSquare'

/**
 * The chess board with all of the pieces
 */
const ChessBoard: React.FC = () => {
  const chessContext = useChessContext()
  const board = chessContext.game.board

  return (
    <div className={styles.chessboard}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.chessboardRow}>
          {row.map((square, columnIndex) => (
            <ChessSquare key={columnIndex} squareData={square} color={getSquareColor(rowIndex, columnIndex)} />
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 * Gets the square color based on the row and column of the square
 * @param row - the row of the square
 * @param column - the column of the square
 * @returns the color of the square
 */
const getSquareColor = (row: number, column: number): 'white' | 'black' => {
  if (row % 2 === 0) {
    return column % 2 === 0 ? 'white' : 'black'
  } else {
    return column % 2 === 0 ? 'black' : 'white'
  }
}

export default ChessBoard
