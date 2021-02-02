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
