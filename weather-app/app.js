const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=11e4a55295d92629e242555e9faac2f6&query=Barcelona'

request({url: url, json: true}, async (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
    }
})

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/barcelona.json?access_token=pk.eyJ1IjoicmFtaXJvaWJsYW5jbyIsImEiOiJja3Z3MTc5cDljMXJlMzBzN3BrZ2ZuOWp3In0.Cfiro0uITanrKpRTj6J6tg'
//
// request({url: geocodeURL, json: true}, async (error, response) => {
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//
//     console.log(latitude, longitude)
// })