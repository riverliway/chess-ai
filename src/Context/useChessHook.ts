import { useState } from 'react'

import { nextPlayer } from '../utils/nextPlayer'
import { Board, Game, Piece, Player, Position } from '../types'

const BOARD_SIZE = 8

export interface ChessHook {
  game: Game
  move: (from: Position, to: Position) => void
  reset: () => void
}

/**
 * @returns The chess hook
 */
export const useChessHook = (): ChessHook => {
  const [game, setGame] = useState<Game>(createInitialGame())

  const move = (from: Position, to: Position): void => {
    setGame(game => {
      const piece = game.board[from.y][from.x]
      if (!piece) {
        return game
      }

      // Create a copy of the board to avoid mutating the state
      const board = game.board.map(row => [...row])

      board[to.y][to.x] = piece
      board[from.y][from.x] = undefined

      return {
        board,
        moves: [
          ...game.moves,
          {
            player: nextPlayer(piece.player),
            piece: piece.piece,
            from,
            to,
            getNotation: (): string => {
              return 'todo'
            }
          }
        ]
      }
    })
  }

  const reset = (): void => {
    setGame(createInitialGame())
  }

  return {
    game,
    move,
    reset
  }
}

/**
 * @returns The initial game
 */
const createInitialGame = (): Game => ({
  board: createDefaultBoard(),
  moves: []
})

/**
 * @returns The initial board with the starting position
 */
const createDefaultBoard = (): Board => {
  const squareMatrix = [...(new Array(BOARD_SIZE)).keys()].map(_ => [...(new Array(BOARD_SIZE)).keys()])
  const board: Board = squareMatrix.map(row => row.map(_ => undefined))

  board[0][0] = { player: Player.WHITE, piece: Piece.ROOK }
  board[0][1] = { player: Player.WHITE, piece: Piece.KNIGHT }
  board[0][2] = { player: Player.WHITE, piece: Piece.BISHOP }
  board[0][3] = { player: Player.WHITE, piece: Piece.KING }
  board[0][4] = { player: Player.WHITE, piece: Piece.QUEEN }
  board[0][5] = { player: Player.WHITE, piece: Piece.BISHOP }
  board[0][6] = { player: Player.WHITE, piece: Piece.KNIGHT }
  board[0][7] = { player: Player.WHITE, piece: Piece.ROOK }
  
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[1][i] = { player: Player.WHITE, piece: Piece.PAWN }
  }

  for (let i = 0; i < BOARD_SIZE; i++) {
    board[6][i] = { player: Player.BLACK, piece: board[1][i]?.piece as Piece }
    board[7][i] = { player: Player.BLACK, piece: board[0][i]?.piece as Piece }
  }

  return board
}
