const Specimen = require(`../models/specimen`)

const index = (req,res) => res.render(`specimens/index`)

const newSpecimen = (req,res) => res.render(`specimens/new`)

const deleteSpec = (req,res)=>
    Specimen.findByIdAndDelete(req.params.id, (err, deletedSpecimen)=>
    res.redirect(`./all`))
    

const update = (req,res)=>{
    Specimen.findByIdAndUpdate(req.params.id, req.body, (err,updatedSpecimen)=>
    console.log(`redirecting`),
    res.redirect(`./all`))
    }

const create = (req,res)=>{
    if(req.body.collectionColor) {
        req.body.collectionColor = req.body.collectionColor.replace( /\s/g, '').split(',');
    }
    const specimen = new Specimen(req.body)
    
    specimen.save ((err) => res.redirect(`./all`))

}

const edit = (req,res)=>{
    Specimen.findById(req.params.id, (err,specimen)=>
    res.render(`specimens/edit`,{specimen}))}

const show =(req,res)=>{
    Specimen.find({}, (err,specimens)=>{
    res.render(`specimens/all`, {specimens})
    })
}
module.exports = {
    index,
    new:newSpecimen,
    delete:deleteSpec,
    update,
    create,
    edit,
    show,
}