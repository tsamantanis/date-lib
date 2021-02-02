const  BetterDate = require('../src/')

const today = new Date()
const betterDate = new BetterDate()
const someBirthday = new BetterDate(1965, 8, 26)
const exampleDate = new BetterDate(2017, 0, 2, 3, 4, 5)

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

test('betterDate.format', function () {
    expect(someBirthday.format()).toBe('1965 September 26')
    expect(exampleDate.format()).toBe('2017 January 02')
    expect(exampleDate.format('y/m/d')).toBe('17/Jan/2')
    expect(exampleDate.format('H:I:S')).toBe('03:04:05')
    expect(exampleDate.format('h:i:s')).toBe('3:4:5')
    expect(exampleDate.format('Y-M-D h:I:S')).toBe('2017-January-02 3:04:05')
})
