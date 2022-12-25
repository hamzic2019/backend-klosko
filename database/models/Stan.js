const mongoose = require('mongoose');


const stanSchema = new mongoose.Schema({
    naslov: {
        type: String,
        trim: true,
        required: true
    },
    podNaslov: {
        type: String,
        trim: true
    },
    kvadrata: {
        type: Number,
        required: true
    },
    brojSoba: {
        type: Number,
        required: true
    },
    sprat: {
        type: String,
        required: true
    },
    vrstaGrijanja: {
        type: String
    },
    opremljen: {
        type: String,
        required: true
    },
    drzava: {
        type: String,
        required: true
    },
    grad: {
        type: String,
        required: true
    },
    adresa: {
        type: String,
        required: false
    },
    balkon: {
        type: Boolean
    },
    kvadraturaBalkona: {
        type: Number
    },
    voda: {
        type: Boolean
    },
    struja: {
        type: Boolean
    },
    kanalizacija: {
        type: Boolean
    },
    orijentacijaStana: {
        type: String
    },
    godinaIzgradnje: {
        type: String
    },
    vrstaPoda: {
        type: String
    },
    daLiSuLjubimciBoraviliUObjektu: {
        type:Boolean
    },
    uknjizenoZK: {
        type: Boolean
    },
    lift: {
        type: Boolean
    },
    parking: {
        type: Boolean
    },
    garaza: {
        type: Boolean
    },
    blindiranaVrata: {
        type: Boolean
    },
    klima: {
        type: Boolean
    },
    telefonskiPrikljucak: {
        type: Boolean
    },
    kablovskaTV: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    podrum: {
        type: Boolean
    },
    ostava: {
        type: Boolean
    },
    videoNadzor: {
        type: Boolean
    },
    alarm: {
        type: Boolean
    },
    zaStudente: {
        type: Boolean
    },
    ukljuceniTrsokoviRezija: {
        type: Boolean
    },
    detaljniOpisArtikla: {
        type: String
    },
    cijena: {
        type: String
    },
    zamjena: {
        type: Boolean
    },
    slike: [{
        data: Buffer,
        contentType: String
    }],
    staZelimDaUradim: {
        type: String // PRODAJA - IZNAJMLJIVANJE - 
    }


});


const Stan = mongoose.model('Stan', stanSchema);


module.exports = Stan;