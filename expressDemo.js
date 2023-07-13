const express = require("express")
const app = express()
const bodyParse = require("body-parser")

const urlEncodedParser = bodyParse.urlencoded({extended:false})

app.get("/",(req,res)=>{
    res.send("Merhaba")
})
app.get("/admin",(req,res)=>{
    res.send("Merhaba admin")
})

app.delete("/product",(req,res)=>{
    res.send("Delete istegi alindi")
})
app.put("/product",(req,res)=>{
    res.send("Put istegi alindi")
})
app.get("/product",(req,res)=>{
    console.log("ID :",+req.query.id);
    console.log( "Category ID :",+req.query.categoryid);
    res.send("Mrhaba product")
})
app.post("/product",urlEncodedParser,(req,res)=>{
    console.log(req.body.isim);
    res.send("Post istegi alindi")
})

const server = app.listen(8080)




