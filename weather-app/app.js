const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=11e4a55295d92629e242555e9faac2f6&query=Barcelona&units=f'

request({url: url, json: true}, async (error, response) => {
    // console.log(`this is error ${error}`)
    // console.log(`this is response`, response.body)
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
})