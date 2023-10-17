
export enum Player {
  WHITE = 'white',
  BLACK = 'black'
}

export enum Piece {
  PAWN = 'pawn',
  ROOK = 'rook',
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  QUEEN = 'queen',
  KING = 'king'
}

export interface Position {
  x: number
  y: number
}

export interface Move {
  player: Player
  piece: Piece
  from: Position
  to: Position
  getNotation: () => string
}

export type BoardSquare = { player: Player, piece: Piece } | undefined

/**
 * The first index is the row (`x`) and the second index is the column (`y`)
 */
export type Board = BoardSquare[][]

export interface Game {
  board: Board
  moves: Move[]
  /**
   * The winner is either one of the players, a stalemate or undefined if the game is still in progress
   */
  winner?: Player | 'stalemate'
}
