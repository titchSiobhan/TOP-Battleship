import { Ship } from './ship.js';
import { popUp } from './gamePlay.js';

class Gameboard {
	constructor() {
		// 10×10 grid representing the board
		// each cell starts as null (empty)
		this.grid = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }, () => null),
		);

		// store all ships placed on the board
		this.ships = [];
		// track all missed shots new Set()
		this.missList = new Set();
		// track all successful hits new Set()
		this.hitList = new Set();
	}
	placeShip(ship, x, y, direction) {
		const size = ship.size;

		// place ship horizontally or vertically
		// // ensure ship stays within board boundaries
		if (direction === 'horizontal') {
			if (y + size > 10) return false;
		} else {
			if (x + size > 10) return false;
		}

		//overlap check
		for (let i = 0; i < size; i++) {
			const checkX = direction === 'horizontal' ? x : x + i;
			const checkY = direction === 'horizontal' ? y + i : y;

			if (this.grid[checkX][checkY] !== null) return false;
		}
		// ensure ship does not overlap with existing ships
		// store ship positions on the grid
		ship.coords = [];
		for (let i = 0; i < size; i++) {
			const placeX = direction === 'horizontal' ? x : x + i;
			const placeY = direction === 'horizontal' ? y + i : y;

			this.grid[placeX][placeY] = ship;
			ship.coords.push({ x: placeX, y: placeY });
		}
		// add ship to internal ship list

		this.ships.push(ship);
		return true;
	}
	receiveAttack(x, y) {
		// check if this coordinate has already been attacked

		const key = `${x},${y}`;
		if (this.hitList.has(key) || this.missList.has(key)) {
			// throw new Error('Already attacked this spot');
			const errorPopup = document.createElement('div');
			errorPopup.textContent = 'Already attacked this spot';
			const gameArea = document.querySelector('.game')
			const container = document.createElement('div');
			const closeBtn = document.createElement('div');
			closeBtn.textContent = 'X';
			closeBtn.setAttribute('class', 'closeBtn');
			container.setAttribute('class', 'popup');

			gameArea.appendChild(container);

			container.appendChild(closeBtn);
			container.appendChild(errorPopup)
			closeBtn.addEventListener('click', () => {
				const PopUp = document.querySelector('.popup');
				gameArea.removeChild(PopUp);
			});
		}

		// if there's a ship at this coordinate:
		//    call ship.hit()
		//    record the hit
		// else:
		//    record the miss

		const cell = this.grid[x][y];
		if (cell instanceof Ship) {
			cell.hit();
			this.hitList.add(key);
			this.grid[x][y] = 'hit';
			return cell.isSunk() ? 'hit-sunk' : 'hit';
		}
		this.missList.add(key);
		this.grid[x][y] = 'miss';

		return 'miss';
	}

	allShipsSunk() {
		// loop through all ships
		// check ship.isSunk()
		// return true only if every ship is sunk
		return this.ships.every((ship) => ship.isSunk());
	}
}

export { Gameboard };
