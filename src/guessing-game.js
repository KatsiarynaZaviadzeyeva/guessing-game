class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.num = Math.round((this.max + this.min) / 2);
        return this.num;
    }

    lower() {
        return this.max = this.num;
    }

    greater() {
        return this.min = this.num;
    }
}

module.exports = GuessingGame;
