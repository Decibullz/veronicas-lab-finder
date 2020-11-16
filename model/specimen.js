const mongoose = require(`mongoose`)

const Schema = mongoose.Schema

const specimenSchema = new Schema({
    test:{String, unique: true},
    specimenCode:String,
},{timestamps:true})

module.exports = mongoose.model('Specimen', specimenSchema)