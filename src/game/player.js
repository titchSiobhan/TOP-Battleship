import {Gameboard} from './gameboard.js'

class player {
    constructor(name, isComputer = false) {
        //player 1
        //player 2 or computer
            //if chosen player vs player {} else computer
        this.name = name;
        this. isComputer = isComputer;
        this.board = new Gameboard();
        this.fleet = [];
    }

    attack(opponent, x, y) {
        return opponent.board.receiveAttack(x, y)
    }

  

    
}

export { player }