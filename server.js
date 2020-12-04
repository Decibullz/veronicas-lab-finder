// require modules
const port = process.env.PORT || 3000
const express = require(`express`)
const morgan = require(`morgan`)
const methodOverride = require('method-override')
const indexRouter = require(`./routes/index`)
const specimenRouter = require(`./routes/specimens`)
const colorRouter = require(`./routes/colors`)
// const userRouter = require(`/routes/users`)

// sett app
const app= express()

// req DB
require(`./config/database`)

// set view engine
app.set(`view engine`, `ejs`)

app.use(morgan(`dev`))
app.use(express.static(`public`))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))


// routes
app.use(`/`, indexRouter)
app.use(`/specimens`, specimenRouter)
app.use(`/colors`, colorRouter)
// app.use(`/users`, userRouter)

// listen
app.listen(port, ()=> console.log(`up and running on port ${port}`))