const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

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

    get month() {
        return months[this.date.getMonth()]
    }

    get mon() {
        return months[this.date.getMonth()].substring(0, 3)
    }
}

module.exports = BetterDate
