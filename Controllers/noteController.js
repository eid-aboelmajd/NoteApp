const Api = { 
getAllNotes : (req , res)=>{
    res.send("Get All Notes");
},
getNote :(req , res)=>{
res.send("Get one note by id");
},
createNote : (req , res)=>{
    res.send("Create Note");
}
,
updateNote : (req , res)=>{
    res.send("Update Note");
},
deleteNote : (req , res)=>{
    res.send("Delete Note");
}
};

exports.Api= Api;

