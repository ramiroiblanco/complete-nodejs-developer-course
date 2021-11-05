const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note of the title to remove.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
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

yargs.parse()