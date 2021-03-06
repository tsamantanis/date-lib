const  BetterDate = require('../src/')

const today = new Date()
const betterDate = new BetterDate()
const someBirthday = new BetterDate(1965, 8, 26)
const exampleDate = new BetterDate(2017, 0, 2, 3, 4, 5)
const exampleOtherDate = new BetterDate(2021, 6, 2, 3, 4, 5)

test('betterDate.year', function() {
    expect(betterDate.year).toBe(today.getFullYear())
    expect(someBirthday.year).toBe(1965)
})

test('betterDate.yr', function() {
    expect(betterDate.yr).toBe(today.getFullYear() % 100)
    expect(someBirthday.yr).toBe(65)
})

test('betterDate.month', function() {
    expect(someBirthday.month).toBe('September')
})

test('betterDate.mon', function() {
    expect(someBirthday.mon).toBe('Sep')
})

test('betterDate.day', function() {
    expect(betterDate.day).toBe(today.getDay())
    expect(someBirthday.day).toBe(26)
})

test('betterDate.hours', function() {
    expect(betterDate.hours).toBe(today.getHours())
    expect(someBirthday.hours).toBe(0)
})

test('betterDate.mins', function() {
    expect(betterDate.mins).toBe(today.getMinutes())
    expect(someBirthday.mins).toBe(0)
})

test('betterDate.secs', function() {
    expect(betterDate.secs).toBe(today.getSeconds())
    expect(someBirthday.secs).toBe(0)
})

test('betterDate.format', function() {
    expect(someBirthday.format()).toBe('1965 September 26')
    expect(exampleDate.format()).toBe('2017 January 02')
    expect(exampleDate.format('E M d, Y')).toBe('Wednesday January 2, 2017')
    expect(exampleDate.format('E M f, Y')).toBe('Wednesday January 2nd, 2017')
    expect(someBirthday.format('E M f, Y')).toBe('Saturday September 26th, 1965')
    expect(exampleDate.format('y/m/d')).toBe('17/Jan/2')
    expect(exampleDate.format('H:I:S')).toBe('03:04:05')
    expect(exampleDate.format('h:i:s')).toBe('3:4:5')
    expect(exampleDate.format('Y-M-D h:I:S')).toBe('2017-January-02 3:04:05')
})

test('betterDate.when', function() {
    expect(exampleDate.when()).toBe('4 years ago')
    expect(someBirthday.when()).toBe('56 years ago')
    expect(betterDate.when()).toBe('now')
    expect(exampleOtherDate.when()).toBe('5 months from now')
    const dateHoursDiff = new BetterDate(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() - 5, 0, 0)
    expect(dateHoursDiff.when()).toBe('5 hours ago')
    const dateMinutesDiff = new BetterDate(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes() + 24, 0)
    expect(dateMinutesDiff.when()).toBe('24 minutes from now')
    const dateSecondsDiff = new BetterDate(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds() + 1)
    expect(dateSecondsDiff.when()).toBe('1 second from now')
})
