const {Gameboard} = require('./gameboard');
const {ship, fleet} = require('./ship')

const board = new Gameboard();
const battleship = fleet[1]

test('place ship', () => {
    
const result = board.placeShip(battleship, 2, 4, 'horizontal');
   
   
   expect(result).toBe(true)
   expect(board.grid[2][4]).toBe(battleship);
   expect(board.grid[2][5]).toBe(battleship);
   expect(board.grid[2][6]).toBe(battleship);


})

test('recive attack', () => {
 const result = board.placeShip(battleship, 1,5, 'horizontal');
 board.receiveAttack(1,6);
 expect(battleship.hits).toBe(1)
})

test('all sunk', () => {
 const result = board.placeShip(battleship, 2,5, 'horizontal');
 board.receiveAttack(2,5);
 board.receiveAttack(2,6);
 board.receiveAttack(2,7);
 board.receiveAttack(2,8);
 expect(board.allShipsSunk()).toBe(true)
})

test('all sunk', () => {
 const result = board.placeShip(battleship, 3,5, 'vertical');
 board.receiveAttack(3,5);
 board.receiveAttack(4,5);
 board.receiveAttack(5,5);

 expect(board.allShipsSunk()).toBe(false)
})