/**
 * TODO:
 * - Add event listener click to button
 * - Create pattern randomly with Math.random()
 * - Store the created pattern in an array
 * - The length of pattern is based on the current level eg. level 5 = patter length 5
 * - Level up if player can memorize the current level pattern
 * - When level start play pattern from start to the end
 * - Game over when player click wrong pattern
 *
 * Data Needed:
 * - Simon Pattern array (number: 1-4)
 * - Player Patter array (number: 1-4)
 *
 * Level Logic:
 * - Each level start push random number (1-4) to Simon Pattern array
 * - Play the pattern from pattern array
 * - After simon pattern end, start event listener
 * - When player click compare Simon Pattern and Player Pattern array
 * - If Correct, Level Up
 *
 * Game Over Logic:
 * - Store player clicked pattern in array
 * - Store pattern array that must followed by player
 * - In event listener, each time player click compare
 *   pattern array and player clicked pattern array
 *   at the same position index.
 * - If not same, Game over.
 */
