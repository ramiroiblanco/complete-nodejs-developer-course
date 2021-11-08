const fs = require('fs')
const chalk = require("chalk");

const read = (title) => {
  const note = loadNotes().find(note => note.title === title)

  if(note){
      console.log(chalk.yellow(note.title))
      console.log(note.body)
  } else {
      console.log(chalk.bgRed(`There are no notes with title ${title}`))
  }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue('Your notes:'))
    notes.forEach(note => console.log(note.title))
}

const removeNote = title => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    read: read
}