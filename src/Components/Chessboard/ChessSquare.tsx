import React from 'react'
import { BoardSquare } from '../../types'
import { getImagePath } from '../../utils/getImagePath'

import styles from './ChessSquare.module.css'

interface ChessSquareProps {
  squareData: BoardSquare
  color: 'white' | 'black'
}

/**
 * A single square on the chess board that can contain a piece or be empty
 * @prop `squareData` - the data for the square
 * @prop `color` - the color of the square
 */
const ChessSquare: React.FC<ChessSquareProps> = props => {
  const colorClass = props.color === 'white' ? styles.whiteSquare : styles.blackSquare

  return (
    <div className={`${styles.chessSquare} ${colorClass}`}>
      {props.squareData && (
        <img className={styles.image} src={getImagePath(props.squareData.player, props.squareData.piece)} />
      )}
    </div>
  )
}

export default ChessSquare
