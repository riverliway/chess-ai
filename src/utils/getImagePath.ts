import { Player, Piece } from '../types'

/**
 * Returns the path to the image of the piece
 * @param player - The player of the piece
 * @param piece - The piece
 * @returns The path to the image of the piece
 */
export const getImagePath = (player: Player, piece: Piece): string => {
  return `./assets/${player}_${piece}.png`
}
