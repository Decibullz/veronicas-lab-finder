const Specimen = require(`../models/specimen`)

const index = (req,res) =>res.render(`specimens/index`,{searched: null})

const search = (req, res)=>{
    console.log(`You are in Search function`)
    const searchBar= req.body
    Specimen.find(searchBar).sort('test').exec((err,searched)=>{
        res.render(`specimens/index`, {searched})
        })
    }

const newSpecimen = (req,res) => res.render(`specimens/new`)

const deleteSpec = (req,res)=>
    Specimen.findByIdAndDelete(req.params.id, (err, deletedSpecimen)=>
    res.redirect(`/specimens/all`))
    
const update = (req,res)=>{
    req.body.serumTube=!!req.body.serumTube
    if(req.body.collectionColor) {
        req.body.collectionColor = req.body.collectionColor.replace( /\s/g, '').split(',');
    }
    Specimen.findByIdAndUpdate(req.params.id, req.body, (err,updatedSpecimen)=>
    console.log(`redirecting`),
    res.redirect(`/specimens/all`))
    }

const create = (req,res)=>{
    if(req.body.collectionColor) {
        req.body.collectionColor = req.body.collectionColor.replace( /\s/g, '').split(',')   
     }
    const specimen = new Specimen(req.body)    
    specimen.save ((err) => res.redirect(`/specimens/all`))
}

const edit = (req,res)=>{
    Specimen.findById(req.params.id, (err,specimen)=>
    res.render(`specimens/edit`,{specimen}))}

const show =(req,res)=>{
    Specimen.find({}).sort('test').exec((err,specimens)=>{
    res.render(`specimens/all`, {specimens})
    })
}
module.exports = {
    index,
    search,
    new:newSpecimen,
    delete:deleteSpec,
    update,
    create,
    edit,
    show,
}