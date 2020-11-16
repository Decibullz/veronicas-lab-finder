const mongoose = require(`mongoose`)

const connection = require(`../utils/database`)

const db = mongoose.connection

mongoose.connect(connection.URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: true,
    useUnifiedTopology:true
})

db.on(`connected`,()=> console.log(`connected to MongoDB @${db.host}:${db.port}`))