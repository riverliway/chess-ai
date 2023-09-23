import { Player } from '../types'

/**
 * Inverts the turn of the player
 * @param player - The player
 * @returns The player to play next
 */
export const nextPlayer = (player: Player): Player => {
  return player === Player.WHITE ? Player.BLACK : Player.WHITE
}
