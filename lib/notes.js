'use strict';

function Notes(obj) {
}
Notes.prototype.execute = function (obj) {
    if(obj.payload){
        // console.log(obj);
    }
}
Notes.prototype.add = function (obj) {
    if(obj.payload){
        let newNotes = {
            id : Math.floor(Math.random() * 100),
            note : obj.payload
        }
        console.log('Adding Note : ',newNotes.note);
    }
}

module.exports = Notes;