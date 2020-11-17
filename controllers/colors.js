const Color = require(`../models/specimen`)

const purple = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Purple", "purple"]}}, (err,purples)=>{
        res.render(`colors/purple`, {purples})
        console.log(purples)
        })
}
const green = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Green", "green"]}}, (err,greens)=>{
    res.render(`colors/green`, {greens})
    console.log(greens)
    })
}
const red = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Red", "reds"]}}, (err,reds)=>{
        res.render(`colors/red`, {reds})
        console.log(reds)
    })
}
const blue = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Blue", "blue"]}}, (err,blues)=>{
        res.render(`colors/blue`, {blues})
        console.log(blues)
    })
}
const sst = (req,res)=>{
    Color.find({serumTube:true}, (err,ssts)=>{
        res.render(`colors/sst`, {ssts})
        console.log(ssts)
    })
}
const swab = (req,res)=>{
    // Color.find({}, (err,swabs)=>{
        res.render(`colors/swab`) //{swabs})
        // console.log(swabs)
    }//)
// }


module.exports={
purple,
green,
red,
blue,
sst,
swab,
}