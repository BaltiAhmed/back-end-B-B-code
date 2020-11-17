const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Dinscription = new schema ({
    nom:{type: String,required:true},
    prenom:{type: String,required:true},
    email:{type: String,required:true},
    tel:{type: String,required:true},
    programme:{type: String,required:true},
    site:{type: String,required:true},
    treated:{type: String,required:true},
     
})

module.exports = mongoose.model('Dinscription',Dinscription);