const mongoose = require(`mongoose`)

const connectionURI =  `mongodb+srv://admin:abc1234@cluster0.bj9cr.mongodb.net/veronicaslabs?retryWrites=true&w=majority`

const db = mongoose.connection

mongoose.connect(connectionURI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: true,
    useUnifiedTopology:true
})

db.on(`connected`,()=> console.log(`connected to MongoDB @${db.host}:${db.port}`))