const fs = require('fs')


require('dotenv').config()

const mongoose = require('mongoose')
var mongodburl = 'mongodb+srv://wadbros:wadbros@cluster0.qyonrl4.mongodb.net/wadbros'
mongoose.set('strictQuery', true);
mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed to Wadbros'  )
} )

mongoose.exports = mongoose