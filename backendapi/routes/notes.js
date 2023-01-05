const express = require('express')
const router = express.Router()
// const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

// Route 1 :GET "/api/notes/fetchallnotes" :Get all the notes of User details using GET , Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error)
        res.status(500).send("Some error occured")
    }
})

// Route 2 :POST "/api/notes/addnote" :Add a note by User details using POST , Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a minimun 5 character description').isLength({ min: 5 })
], async (req, res) => {

    const { title, description, tag } = req.body

    //If there are any error,return BAd request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //Created a new Note Object to re-fill the values and save() the note
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        console.log(error)
        res.status(500).send("Some error occured")
    }
})


// Route 3 :PUT "/api/notes/updatenote" :Update an existing note by User details using PUT , Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body

        const newNote = {}

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        //FIND THE NOTE TO BE UPDATED
        let note = await Note.findById(req.params.id)
        // console.log(note);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note })
    } catch (error) {
        console.log(error)
        res.status(500).send("Some error occured")
    }

})

// Route 4 :DELETE "/api/notes/deletenote" :Delete an existing note by User details using DELETE , Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        //FIND THE NOTE TO BE UPDATED
        let note = await Note.findById(req.params.id)
        console.log(note);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)

        res.json({ "Success": "Note has been deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Some error occured")
    }

})

module.exports = router