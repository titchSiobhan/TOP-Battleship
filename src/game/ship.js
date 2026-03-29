class Ship {
	constructor(name, size, hits) {
		this.name = name;
		this.size = size;
		this.hits = hits;
	}
	hit() {
		this.hits++;
	}

	isSunk() {
		if (this.hits === this.size) {
			return true;
		} else {
			return false;
		}
	}
}

let fleet = [];


const carrier = new Ship('Carrier', 5, 0);
const battleship = new Ship('Battleship', 4, 0);
const cruiser = new Ship('Cruiser', 3, 0);
const submarine = new Ship('Submarine', 3, 0);
const destroyer = new Ship('Destroyer', 2, 0);

fleet.push(carrier, battleship, cruiser, submarine, destroyer);

export { Ship, fleet };
