const getNotes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing the note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all your notes',
    handler: function() {
        console.log('Listing all your notes!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reads the note you pass as an option',
    handler: function() {
        console.log('Here is your note, ready for reading!')
    }
})

//add, remove, read, list


console.log(yargs.argv)
