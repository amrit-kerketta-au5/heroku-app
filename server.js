const express = require('express')
const app = express()
const port = process.env.PORT || 5000 
const path = require('path')
app.get('/',async(req,res)=>{
    app.use(express.static('couples/build'))
    res.sendFile(path.resolve(__dirname,'couples','build','index.html'))
})
app.get('/business',async(req,res)=>{
    app.use(express.static('vendor/build'))
    res.sendFile(path.resolve(__dirname,'vendor','build','index.html'))
})

app.listen(port,async(req,res)=>{
    console.log('Server started at ',port)
})
