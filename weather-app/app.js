const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode(`carrer d'indibil, 12`, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(41.369574, 2.143957, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})