const express = require("express");
const noteController = require("../Controllers/noteController");


const router = express.Router();

router.get("/notes" ,noteController.getAllNotes);
router.get("/notes/note" ,noteController.getNote);
router.post("/notes/createnote" ,noteController.createNote);
router.put("/notes/updatenote" ,noteController.updateNote);
router.delete("/notes/deletenote" ,noteController.deleteNote);

module.exports = router;

