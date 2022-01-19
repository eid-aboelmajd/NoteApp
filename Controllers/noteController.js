const Note = require("../Models/NoteModel");
const generator = require("../Utilities/generator");
const memstorage = require("../Utilities/memory.storage");



const Api = {
    getAllNotes: (req, res) => {
        var values = memstorage.customeActions.GetValues(memstorage.store);
        res.send(JSON.stringify(values));
    },
    getNote: (req, res) => {
        var id = req.query.id;
        var noteobj = memstorage.store.getItem(id);
        if(!noteobj)
        {
            res.status(500).send({error : "object not exist"});
        }
        res.status(200).send(noteobj);
    },
    createNote: (req, res) => {
        var seqId = generator.generate();
        var title = req.body.title;
        var content = req.body.content;
        var createdAt = new Date();
        var createdBy = "eid mosad";
        if (!title || !content) {
             return res.status(500).send({ error: "title and content are required" });
        }

        var noteObj = new Note(seqId, title, content, createdBy, createdAt);
        memstorage.store.setItem(seqId, noteObj);
        return res.status(201).send("Note is created successfully!");
    }
    ,
    updateNote: (req, res) => {
        var noteId = req.body.noteId;
        var title = req.body.title;
        var content = req.body.content;
        if (!title || !content || !noteId) {
            return res.status(500).send({ error: "title, content,and noteId are required" });
        }

        var noteObj = memstorage.store.getItem(noteId);
        if(!noteObj)
        {
            return res.status(500).send({error : "object not exist"});
        }
        noteObj.title = title;
        noteObj.content = content;
        memstorage.store.removeItem(noteId);
        memstorage.store.setItem(noteId, noteObj);
        return res.status(201).send("Note is updated successfully!");
    },
    deleteNote: (req, res) => {
        var id = req.query.id;
        var noteobj = memstorage.store.getItem(id);
        if(!noteobj)
        {
            return res.status(500).send({error : "object not exist"});
        }
        memstorage.store.removeItem(id);
        return res.status(200).send(`note no ${id} is deleted successfully!`);
    }
};

module.exports = Api;

