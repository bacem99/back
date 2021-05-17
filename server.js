const dotenv = require('dotenv');
const mongoose= require('mongoose')
const app = require('./app.js')

dotenv.config({path:'./config.env'})
const db=process.env.DATABASE.replace('<password>',process.env.DATABASEPASSWORD)
//mongoose.connect(db,{
    mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true

}).then((rep)=>{
    console.log("connected succesfuly")
    //console.log(rep.connection)
})
const port=3000||process.env.PORT
//console.log(process.env)
app.listen(port,()=>{
    console.log("app runing on port :"+port)
})

