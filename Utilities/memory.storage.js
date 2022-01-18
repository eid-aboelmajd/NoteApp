var MemoryStorage = require('memorystorage');
// here, the MemoryStorage function is available
var store = new MemoryStorage('note-app');

var customeActions = {
    test : ()=>{
       return "eid mosad";
    },
    GetKeys :(store)=>{
        var Keys = Object.keys(store);
        return Keys;
    },
    GetValues : (store)=>{        
        var values =[];
        var Keys = Object.keys(store);
        for (let index = 0; index < Keys.length; index++) {
            var value = store.getItem(Keys[index]);
            values.push(value);
        }
        return values;
    }
};



module.exports = {
customeActions : customeActions,
store : store
};