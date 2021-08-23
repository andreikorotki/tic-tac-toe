
class TicTacToe {
    constructor() {
        this.marks = [[null,null,null],[null,null,null],[null,null,null]];
        this.steps = 0;
        this.initPlayer = '-';
    }

    getCurrentPlayerSymbol() {
        if ((this.steps % 2) === 0) {
            return 'x';
        }
        else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        let symbol = this.getCurrentPlayerSymbol();
        if (this.marks[rowIndex][columnIndex] === null) {
            this.marks[rowIndex][columnIndex] = symbol;
            this.steps++;
        }
    }

    isFinished() {
        if (this.getWinner() !== null || this.isDraw()) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        let winner;
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i][0] === this.marks[i][1] && this.marks[i][0] === this.marks[i][2] && this.marks[i][0] !== null) {
                winner = this.marks[i][0];
                return winner;
                
            }

            if (this.marks[0][i] === this.marks[1][i] && this.marks[1][i] === this.marks[2][i] && this.marks[0][i] !== null) {
                winner = this.marks[0][i];
                return winner;
            }
        }

        
        if (this.marks[0][0] === this.marks[1][1] && this.marks[1][1] === this.marks[2][2] && this.marks[0][0] !== null) {
            winner = this.marks[0][0];
        }

        else if (this.marks[0][2] === this.marks[1][1] && this.marks[1][1] === this.marks[2][0] && this.marks[0][2] !== null) {
            winner = this.marks[0][2];
        }
        else {
            winner = null;
        }
        return winner;
    }

    noMoreTurns() {
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].includes(null)) {
                return false;
            }
        }
        return true;

    }

    isDraw() {
        let winner = this.getWinner();
        let noTurns = this.noMoreTurns();
        if (winner === null && (noTurns)) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.marks[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
