const {
    months,
    days,
    withZero,
    ordinalPrefix
} = require('./helpers')

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
    when() {
        const now = new BetterDate()
        const diffYear = this.year - now.year
        const diffMonth = this.date.getMonth() - now.date.getMonth() + diffYear * 12
        const diffDay = this.day - now.day
        const diffHours = this.hours - now.hours + diffDay * 24
        const diffMinutes = this.mins - now.mins + diffHours * 60
        const diffSeconds = this.secs - now.secs + diffMinutes * 60

        if (diffMonth > 11) {
            return `${ diffYear } year${ diffYear > 1 ? 's' : '' } from now`
        } else if (diffMonth < -11) {
            return `${ Math.abs(diffYear) } year${ diffYear < -1 ? 's' : '' } ago`
        } else if (diffMonth > 0) {
            return `${ diffMonth } month${ diffMonth > 1 ? 's' : '' } from now`
        } else if (diffMonth < 0) {
            return `${ Math.abs(diffMonth)} month${ diffMonth < -1 ? 's' : '' } ago`
        } else if (diffHours > 23) {
            return `${ diffDay } day${ diffDay > 1 ? 's' : '' } from now`
        } else if (diffHours < -23) {
            return `${ diffDay } day${ diffDay < -1 ? 's' : '' } ago`
        } else if (diffMinutes > 59) {
            return `${ Math.abs(diffHours) } hour${ diffHours > 1 ? 's' : '' } from now`
        } else if (diffMinutes < -59) {
            return `${ Math.abs(diffHours) } hour${ diffHours < -1 ? 's' : '' } ago`
        }  else if (diffSeconds > 59) {
            return `${ Math.abs(diffMinutes) } minute${ diffMinutes > 1 ? 's' : '' } from now`
        } else if (diffSeconds < -59) {
            return `${ Math.abs(diffMinutes) } minute${ diffMinutes < -1 ? 's' : '' } ago`
        }  else if (diffSeconds > 0) {
            return `${ Math.abs(diffSeconds) } second${ diffSeconds > 1 ? 's' : '' } from now`
        } else if (diffSeconds < 0) {
            return `${ Math.abs(diffSeconds) } second${ diffSeconds < -1 ? 's' : '' } ago`
        } else {
            return 'now'
        }
    }
}

module.exports = BetterDate
