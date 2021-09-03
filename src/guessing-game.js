class GuessingGame {
    constructor() {
        this.min = null
        this.max = null
        this.current = null
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.current = Math.ceil(this.min + (this.max-this.min)/2)
        return this.current
    }

    lower() {
        this.max = this.current
    }

    greater() {
        this.min = this.current
    }
}

module.exports = GuessingGame;
