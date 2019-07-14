const cities = require('./data/cities.json')
const events = require('./data/events.json')

module.exports = () => {
    return { cities: cities, events: events }
}