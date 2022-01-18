const express = require("express");
const noteController = require("../Controllers/noteController");


const router = express.Router();

router.get("/notes" ,noteController.Api.getAllNotes);
router.get("/notes/note" ,noteController.Api.getNote);
router.post("/notes/createnote" ,noteController.Api.createNote);
router.put("/notes/updatenote" ,noteController.Api.updateNote);
router.delete("/notes/deletenote" ,noteController.Api.deleteNote);

module.exports = router;

