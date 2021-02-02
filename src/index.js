class BetterDate {
    contructor(...args) {
        this.date = new Date(...args)
    }

    year() {
        return this.date.getFullYear()
    }

    yr() {
        return this.date.getFullYear() % 100
    }
}
