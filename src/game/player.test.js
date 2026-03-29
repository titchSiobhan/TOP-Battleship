const { player } = require('./player');
const { Gameboard } = require('./gameboard');
const { ship } = require('./ship');

test('player is created', () => {
    const playerOne = new player('Victor');
    expect(playerOne.name).toBe('Victor');
    expect(playerOne.isComputer).toBe(false);
})

test('player can attack another player', () => {
    const playerOne = new player('Victor');
    const playerTwo = new player('Oliver');

    const Ship = new ship('Destroyer', 2);
    playerTwo.board.placeShip(Ship, 2, 3, 'horizontal');

    const result = playerOne.attack(playerTwo, 2, 3);

    expect(result).toBe('hit');
});
