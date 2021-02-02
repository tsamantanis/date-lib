const  BetterDate = require('../src/')

const betterDate = new BetterDate()
const today = new Date()

test('betterDate.year', function() {
    expect(betterDate.year).toBe(today.getFullYear())
})
