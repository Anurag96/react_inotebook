import mongoose from 'mongoose';

const NotesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    tag: { type: String, default:"general"},
    date: { type: Date, default: Date.now },
});
const Notes = mongoose.model('notes', NotesSchema)
Notes.createIndexes();
module.exports = Notes