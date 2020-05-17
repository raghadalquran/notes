'use strict';

function Notes(obj) {
}

Notes.prototype.execute = function (obj) {
    if(obj.payload){
        console.log('Added new NOTE', obj);
    }
}
Notes.prototype.add = function (obj) {
    if(obj.payload){
        let newNotes = {
            id : Math.floor(Math.random() * 10),
            note : obj.payload
        }
        console.log('Add',newNotes);
    }
}

module.exports = Notes;