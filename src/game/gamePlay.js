import { player } from './player.js'

import { Ship, fleet } from './ship.js'

const gameArea = document.querySelector('.game');
let playerOne;
let playerTwo;

function createFleet() {
	 return [
        new Ship('Carrier', 5, 0),
        new Ship('Battleship', 4, 0),
        new Ship('Cruiser', 3, 0),
        new Ship('Submarine', 3, 0),
        new Ship('Destroyer', 2, 0)
    ];

}

function newGame() {
	const playerChoice = document.createElement('div');
	playerChoice.setAttribute('class', 'formBox');
	const howManyPlayers = document.createElement('form');
	playerChoice.textContent = 'How many players?';
	howManyPlayers.setAttribute('class', 'startBtn manyPlayers');

	// one or two players
	const onePlayer = document.createElement('button');
	const twoPlayers = document.createElement('button');

	onePlayer.textContent = 'One Player';
	twoPlayers.textContent = 'Two Players';
	onePlayer.setAttribute('class', 'btn onePlayer');
	twoPlayers.setAttribute('class', 'btn twoPlayers');

	// submit button

	// start game
	playerChoice.appendChild(howManyPlayers);
	howManyPlayers.appendChild(onePlayer);
	howManyPlayers.appendChild(twoPlayers);
	gameArea.appendChild(playerChoice);

	onePlayer.addEventListener('click', () => {
		closePlayerChoiceBTNS();
		const playerChoice = document.querySelector('.formBox');

		playerChoice.textContent = 'Name';
		const nameBox = document.createElement('input');
		nameBox.setAttribute('type', 'textbox');
		nameBox.setAttribute('class', 'newName');
		nameBox.setAttribute('id', 'newName');
		nameBox.setAttribute('maxLength', 15);
		const submitBtn = document.createElement('button');
		submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('class', 'btn')
		submitBtn.textContent = 'Submit';

		playerChoice.appendChild(nameBox);
		playerChoice.appendChild(submitBtn);

		submitBtn.addEventListener('click', (e) => {
			e.preventDefault();
			const playerOneName = nameBox.value;
			playerOne = new player(playerOneName);
			playerTwo = new player('Computer', true);
            playerOne.fleet = createFleet();
            playerTwo.fleet = createFleet();

			gameArea.removeChild(playerChoice);
			loadBoard(playerOne,  playerTwo);
			return { playerOne, playerTwo };
		});
	});

	twoPlayers.addEventListener('click', () => {
		// closePlayerChoiceBTNS();
		// playerChoice.textContent = 'Player Names';
		// const nameBox = document.createElement('input');
		// nameBox.setAttribute('type', 'textbox');
		// nameBox.setAttribute('class', 'newName');
		// nameBox.setAttribute('id', 'newName');
		// nameBox.setAttribute('maxLength', 15);
		// nameBox.placeholder = 'Player One Name';

		// const nameBoxTwo = document.createElement('input');
		// nameBoxTwo.setAttribute('type', 'textbox');
		// nameBoxTwo.setAttribute('class', 'newName');
		// nameBoxTwo.setAttribute('id', 'newName');
		// nameBoxTwo.setAttribute('maxLength', 15);
		// nameBoxTwo.placeholder = 'Player Two Name';
		// const submitBtn = document.createElement('button');
		// submitBtn.setAttribute('type', 'submit');
		// submitBtn.textContent = 'Submit';
		howManyPlayers.removeChild(twoPlayers);
        const no = document.createElement('div');
        no.textContent ='No';
        no.setAttribute('class', 'no')
        howManyPlayers.appendChild(no)
		// playerChoice.appendChild(nameBox);
		// playerChoice.appendChild(nameBoxTwo);
		// playerChoice.appendChild(submitBtn);
		// submitBtn.addEventListener('click', (e) => {
		// 	e.preventDefault();
		// 	const playerOneName = nameBox.value;
		// 	const playerOne = new player(playerOneName);
		// 	const playerTwoName = nameBoxTwo.value;
		// 	const playerTwo = new player(playerTwoName);

		// 	gameArea.removeChild(playerChoice);
		// 	// loadBoards(playerOne, playerTwo, fleet);
		// 	return { playerOne, playerTwo };
		// });
	});
}

function closePlayerChoiceBTNS() {
	const onePlayer = document.querySelector('.onePlayer');
	const twoPlayers = document.querySelector('.twoPlayers');
	const howManyPlayers = document.querySelector('.manyPlayers');

	howManyPlayers.removeChild(onePlayer);
	if (twoPlayers) {
		howManyPlayers.removeChild(twoPlayers);
	}
}

// load boards
function loadBoard(playerOne,  playerTwo) {
	const gameBoardBox = document.createElement('div');
	gameBoardBox.setAttribute('class', 'gridBox playerBox');

	const chooseDirection = document.createElement('input');
	chooseDirection.setAttribute('class', 'direction');
	chooseDirection.setAttribute('type', 'checkbox');
	const chooseDirectionLabel = document.createElement('label');
    chooseDirection.setAttribute('id', 'direction')
	chooseDirectionLabel.setAttribute('class', 'chooseDirectionLabel');
    chooseDirectionLabel.htmlFor ='direction'
	// chooseDirectionLabel.textContent = 'Vertical';
    const slider = document.createElement('div');
    slider.setAttribute('class', 'slider')
	if (chooseDirection.checked) {
		return (direction = 'horizontal');
	}
gameArea.appendChild(chooseDirection);
	gameArea.appendChild(chooseDirectionLabel);
	
    gameArea.appendChild(slider)
	gameArea.appendChild(gameBoardBox);

	renderBoard(playerOne, gameBoardBox);
	addShips(playerOne, gameBoardBox, playerTwo);
}

function renderBoard(player, boardBox) {
	boardBox.innerHTML = '';
	player.board.grid.forEach((row, rowIndex) => {
		row.forEach((cell, colIndex) => {
			const cellBox = document.createElement('div');

			cellBox.classList.add('gameCells');

			// if (cell !== null) {
			// 	cellBox.classList.add('occupied'); // turns red
			// }
			// if (cell && typeof cell === 'object') {
			// 	cellBox.classList.add('occupied');
			// }

			            if (cell !== null && player.isComputer === false) {
			    cellBox.classList.add('occupied');
			}

			if (cell === 'hit') {
				cellBox.classList.add('hit');

				cellBox.classList.remove('occupied');
			}
			if (cell === 'miss') {
				cellBox.classList.add('miss');
			}
			cellBox.dataset.x = rowIndex;
			cellBox.dataset.y = colIndex;

			boardBox.appendChild(cellBox);
		});
	});

	const coords = document.querySelector('.coords');
	if (coords) {
		gameArea.removeChild(coords);
	}
	// coordHoover();
}

function addShips(playerOne,  gameBoardBox, playerTwo, computerBoardBox) {
	let currentShipIndex = 0;

	function attachListener() {
		gameBoardBox.querySelectorAll('.gameCells').forEach((cellBox) => {
			cellBox.addEventListener('click', () => {
				const x = Number(cellBox.dataset.x);
				const y = Number(cellBox.dataset.y);

				const ship = playerOne.fleet[currentShipIndex];

				if (!ship) {
					console.warn('No ships left to place');

					return;
				}
				if (ship === playerOne.fleet[4]) {
					const startGameBtn = document.createElement('button');
					startGameBtn.setAttribute('type', 'submit');
					startGameBtn.setAttribute('class', 'startGameBtn btn');
					gameArea.appendChild(startGameBtn);
					startGameBtn.textContent = 'Start Game';
					startGameBtn.addEventListener('click', (e) => {
						e.preventDefault();

						const chooseDirection = document.querySelector('.direction');
						const chooseDirectionLabel = document.querySelector(
							'.chooseDirectionLabel',
						);
						gameArea.removeChild(startGameBtn);
						addComputerShips(playerTwo, computerBoardBox);
						createComputerBoard(playerTwo);
						const slider =document.querySelector('.slider')
						

						playerTurns(playerOne, playerTwo);

						gameArea.removeChild(chooseDirectionLabel);
						gameArea.removeChild(chooseDirection);
                        gameArea.removeChild(slider)
					});

				}
				const chooseDirection = document.querySelector('.direction');
				const direction = chooseDirection.checked ? 'vertical' : 'horizontal';

				const placed = playerOne.board.placeShip(ship, x, y, direction);
                console.log("Ship:", ship);
console.log("Ship size:", ship.size);


				if (placed) {
					currentShipIndex++;
					renderBoard(playerOne, gameBoardBox);

					// renderBoard(playerTwo, p2Board);
					attachListener();
				}
			});
		});
	}
	attachListener();
}

function coordHoover() {
	document.querySelectorAll('.gameCells').forEach((cellBox) => {
		cellBox.addEventListener('mouseenter', () => {
			const coords = document.createElement('div');
			coords.setAttribute('class', 'coords');

			coords.textContent = `x: ${Number(cellBox.dataset.x) + 1}, y: ${Number(cellBox.dataset.y) + 1}`;
			gameArea.appendChild(coords);
		});
		cellBox.addEventListener('mouseleave', () => {
			const coords = document.querySelector('.coords');
			if (coords) gameArea.removeChild(coords);
		});
	});
}

//computer board

function createComputerBoard(playerTwo) {
	const computerBoardBox = document.createElement('div');
	computerBoardBox.setAttribute('class', 'computerGridBox gridBox');

	gameArea.appendChild(computerBoardBox);
	renderBoard(playerTwo, computerBoardBox);
}

function addComputerShips(playerTwo,  computerBoardBox) {
	let currentShipIndex = 0;
	while (currentShipIndex < playerTwo.fleet.length) {
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);
		const ship = playerTwo.fleet[currentShipIndex];
		const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
		const placed = playerTwo.board.placeShip(ship, x, y, direction);
		if (placed) {
			currentShipIndex++;
		}
	}
}

function playerAttack(playerTwo, x, y, playerOne) {
	const result = playerTwo.board.receiveAttack(x, y);

	const computerBoardBox = document.querySelector('.computerGridBox');
	console.log('Ships:', playerOne.board.ships);
	console.log(
		'Sunk states:',
		playerOne.board.ships.map((s) => s.isSunk()),
	);
    console.log(`player one`, playerOne.fleet);
console.log(`player two`, playerTwo.fleet);

	renderBoard(playerTwo, computerBoardBox);
	gameOver(playerOne, playerTwo);

	return result;
}

//computer attack
function computerAttack(playerOne, playerTwo) {
	let x;
	let y;
	do {
		x = Math.floor(Math.random() * 10);
		y = Math.floor(Math.random() * 10);
	} while (
		playerOne.board.grid[x][y] === 'hit' ||
		playerOne.board.grid[x][y] === 'miss'
	);
	const result = playerOne.board.receiveAttack(x, y);

	const gameBoardBox = document.querySelector('.playerBox');

   
	renderBoard(playerOne, gameBoardBox);
	gameOver(playerOne, playerTwo);
  
	return result;
    
}

///player turn

let currentPlayer = playerOne;
let opponent = playerTwo;

function switchTurns() {
	const temp = currentPlayer;
	currentPlayer = opponent;
	opponent = temp;
}

function playerTurns(playerOne, playerTwo) {
	currentPlayer = playerOne;
	opponent = playerTwo;
	attachPlayerAttackListeners(playerOne, playerTwo);
}

function attachPlayerAttackListeners(playerOne, playerTwo) {
	const computerBoardBox = document.querySelector('.computerGridBox');

	computerBoardBox.querySelectorAll('.gameCells').forEach((cell) => {
		cell.addEventListener('click', () => {
			if (currentPlayer !== playerOne) return;

			const x = Number(cell.dataset.x);
			const y = Number(cell.dataset.y);

			const result = playerAttack(playerTwo, x, y, playerOne);

			switchTurns();

			setTimeout(() => {
				computerAttack(playerOne, playerTwo);
				switchTurns();

				// reattach listeners after computer turn
				attachPlayerAttackListeners(playerOne, playerTwo);
			}, 500);
		});
	});
}

function gameOver(playerOne, playerTwo) {
	const playerOneLost = playerOne.board.allShipsSunk();
	const playerTwoLost = playerTwo.board.allShipsSunk();

	console.log({ playerOneLost, playerTwoLost });
	if (!playerOneLost && !playerTwoLost) return;
	const winner = playerOneLost ? playerTwo : playerOne;
    
    

	showWinner(winner)
    
}
function showWinner(winner) {
    const winnerPopUp = document.createElement('div');
    winnerPopUp.className = 'winnerMessage';
    winnerPopUp.textContent = `${winner.name} is the winner`;

    let container = document.querySelector('.popup');
    if (!container) {
        popUp(); // your function that creates the popup wrapper
        container = document.querySelector('.popup');
        container.appendChild(winnerPopUp);
    }

    
}


function popUp() {
	const container = document.createElement('div');
	const closeBtn = document.createElement('div');
	closeBtn.textContent = 'X';
	closeBtn.setAttribute('class', 'closeBtn');
	container.setAttribute('class', 'popup');

    
	gameArea.appendChild(container);
    
	container.appendChild(closeBtn);
	closeBtn.addEventListener('click', closeButton);
}
function closeButton() {
	const PopUp = document.querySelector('.popup');
	gameArea.removeChild(PopUp);
    endGame()
}

function endGame() {
gameArea.innerHTML = '';
newGame()
}
export { newGame, popUp };
