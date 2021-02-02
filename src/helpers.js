const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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

module.exports = {
    months,
    days,
    withZero,
    ordinalPrefix
}
