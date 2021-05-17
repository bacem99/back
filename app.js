const { request } = require('express');
const express=require('express');
const app=express();
const morgan=require('morgan')
const abonnementRouter=require('./routes/abonnementRoute.js')
const adminDashBordRouter=require('./routes/adminDashBordRoute')
const clientRouter=require('./routes/clientRoute.js')
const garageRouter=require('./routes/garageRoute.js')
const interventionRouter=require('./routes/interventionRoute.js')
const machineRouter=require('./routes/machineRoute.js')
const notificationRouter=require('./routes/notificationRoute.js')
const operationRouter=require('./routes/operationRoute.js')
const planingRouter=require('./routes/planingRoute.js')
const usersRouter=require('./routes/userRoute.js')
const vehiculeRouter=require('./routes/vehiculeRoute.js')
//const testRouter=require('./routes/testRoute')

app.use(express.json())
app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log(req.headers)
    next();
})


app.use('/api/v1/abonnement',abonnementRouter)
app.use('/api/v1/adminDashBord',adminDashBordRouter)
app.use('/api/v1/client',clientRouter)
app.use('/api/v1/garage',garageRouter)
app.use('/api/v1/intervention',interventionRouter)
app.use('/api/v1/machine',machineRouter)
app.use('/api/v1/notification',notificationRouter)
app.use('/api/v1/operation',operationRouter)
app.use('/api/v1/planing',planingRouter)
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/vehicule',vehiculeRouter)
//app.use('/api/v1/test',testRouter)

//console.log(request.headers)
 module.exports=app;
 
 