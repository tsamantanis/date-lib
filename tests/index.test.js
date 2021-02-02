const  BetterDate = require('../src/')

const today = new Date()
const betterDate = new BetterDate()
const someBirthday = new BetterDate(1965, 8, 26)

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
