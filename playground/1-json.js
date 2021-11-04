const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Ramiro"
user.age = 41

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)