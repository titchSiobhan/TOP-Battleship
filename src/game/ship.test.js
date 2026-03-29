const {ship, fleet} = require('./ship')


const battleship = fleet[1]
const carrier = fleet[0]

test('increase hit by one', () => {
    battleship.hit();
    expect(battleship.hits).toBe(1)
})
test('ship is not sunk', () => {
   battleship.hit();
   battleship.hit();
   
   battleship.isSunk();
    expect(battleship.isSunk()).toBe(false)
})

test('ship is sunk', () => {
   carrier.hit();
   carrier.hit();
   carrier.hit();
   carrier.hit();
   carrier.hit();
   carrier.isSunk();
    expect(carrier.isSunk()).toBe(true)
})

test('ship length', () => {
    battleship.size;
    console.log(battleship);
console.log("size:", battleship.size);

    expect(battleship.size).toBe(4);
})

test('ship length', () => {
   carrier.size;
    expect(carrier.size).toBe(5)
})

