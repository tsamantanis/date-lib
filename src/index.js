class BetterDate {
    constructor(...args) {
        this.date = new Date(...args)
    }

    get year() {
        return this.date.getFullYear()
    }

    get yr() {
        return this.date.getFullYear() % 100
    }
}

module.exports = BetterDate
