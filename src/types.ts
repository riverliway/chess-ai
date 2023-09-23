
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

/**
 * The first index is the row and the second index is the column
 */
export type Board = ({ player: Player, piece: Piece } | undefined)[][]

export interface Game {
  board: Board
  moves: Move[]
  winner?: Player | 'stalemate'
}
