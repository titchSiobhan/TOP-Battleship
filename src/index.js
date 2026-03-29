import { player } from './game/player.js'
import { newGame } from './game/gamePlay.js';
import { ship, fleet } from './game/ship.js'
import './style.css'
const gameArea = document.querySelector('.game');

newGame(gameArea)