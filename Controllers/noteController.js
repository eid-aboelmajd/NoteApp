const { json } = require("body-parser");
const generator = require("../Utilities/generator");
const memstorage = require("../Utilities/memory.storage");


const Api = { 
getAllNotes : (req , res)=>{
    var seqId = generator.generate();
    memstorage.store.setItem(seqId ,seqId + "-Note" );
    var keys = memstorage.customeActions.GetKeys(memstorage.store);
    var values = memstorage.customeActions.GetValues(memstorage.store);
    res.send(JSON.stringify(memstorage.store));
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

module.exports= Api;

//
//
