const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function withZero(number) {
    return number < 10 ? `0${number}` : number.toString()
}

function ordinalPrefix(date) {
    date = date.toString()
    if (date.charAt(date.length - 1) === '1') return date + 'st'
    else if (date.charAt(date.length - 1) === '2') return date + 'nd'
    else if (date.charAt(date.length - 1) === '3') return date + 'rd'
    else return date + 'th'
}

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

    get day() {
        return this.date.getDate()
    }

    get dayName() {
        return days[this.day % 7]
    }

    get dayShortName() {
        return days[this.day % 7].substring(0, 3)
    }

    get hours() {
        return this.date.getHours()
    }

    get mins() {
        return this.date.getMinutes()
    }

    get secs() {
        return this.date.getSeconds()
    }

    format(mask = 'Y M D') {
        const maskArray = mask.split('')
        let dateStr = ''
        maskArray.forEach((char) => {
            switch (char) {
                case 'Y':
                    dateStr += this.year
                    break
                case 'y':
                    dateStr += this.yr
                    break
                case 'M':
                    dateStr += this.month
                    break
                case 'm':
                    dateStr += this.mon
                    break
                case 'D':
                    dateStr += withZero(this.day)
                    break
                case 'd':
                    dateStr += this.day
                    break
                case 'E':
                    dateStr += this.dayName
                    break
                case 'e':
                    dateStr += this.dayShortName
                    break
                case 'F':
                    dateStr += ordinalPrefix(withZero(this.day))
                    break
                case 'f':
                    dateStr += ordinalPrefix(this.day)
                    break
                case 'H':
                    dateStr += withZero(this.hours)
                    break
                case 'h':
                    dateStr += this.hours
                    break
                case 'I':
                    dateStr += withZero(this.mins)
                    break
                case 'i':
                    dateStr += this.mins
                    break
                case 'S':
                    dateStr += withZero(this.secs)
                    break
                case 's':
                    dateStr += this.secs
                    break
                default:
                    dateStr += char
            }
        });
        return dateStr
    }
}

module.exports = BetterDate
