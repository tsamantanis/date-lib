const  BetterDate = require('../src/')

const betterDate = new BetterDate()

test('get year', function() {
    expect(betterDate.year).toBe(2021)
    expect(betterDate.yr).toBe(21)
})
