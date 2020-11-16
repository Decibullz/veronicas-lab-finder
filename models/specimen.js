const mongoose = require(`mongoose`)

const Schema = mongoose.Schema

const specimenSchema = new Schema({
    test:{type:String, unique:true},
    collectionColor:[String],
},{timestamps:true})

module.exports = mongoose.model('Specimen', specimenSchema)