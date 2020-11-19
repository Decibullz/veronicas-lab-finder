const Color = require(`../models/specimen`)

const purple = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Purple", "purple"]}}).sort('test').exec((err,purples)=>{
        res.render(`colors/purple`, {purples})
        })
}
const green = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Green", "green"]}}).sort('test').exec((err,greens)=>{
    res.render(`colors/green`, {greens})
    })
}
const red = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Red", "reds"]}}).sort('test').exec((err,reds)=>{
        res.render(`colors/red`, {reds})
    })
}
const blue = (req,res)=>{
    Color.find({collectionColor:{ $in: ["Blue", "blue"]}}).sort('test').exec((err,blues)=>{
        res.render(`colors/blue`, {blues})
    })
}
const sst = (req,res)=>{
    Color.find({serumTube:true}).sort('test').exec((err,ssts)=>{
        res.render(`colors/sst`, {ssts})
    })
}


module.exports={
purple,
green,
red,
blue,
sst,
}