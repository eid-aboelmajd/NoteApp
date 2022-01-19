class Note {
    constructor(noteId , title , content , createdBy , createdAt){
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
};

module.exports = Note;


