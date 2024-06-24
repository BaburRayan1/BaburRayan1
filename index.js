const express = require('express')
const mongoose = require('mongoose')
const Note = require("./models/Note")
const User = require("./models/user")   
const app=express()
app.use(express.json({extended:true}))

app.use(express.urlencoded())

const port = 3000
 
app.get('/', (req, res) => {
    res.sendFile("pages/index.html", { root: __dirname })
})
app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", { root: __dirname })
})
app.get('/signup', (req, res) => {
    res.sendFile("pages/signup.html", { root: __dirname })
})




app.post('/getnotes', (req, res) => {
    const{userToken} = req.body
    res.sendFile("pages/index.html", { root: __dirname })
})
app.post('/login', async(req, res) => {
    console.log("inside login" ,req.body)
    let user = await User.findOne({email:req.body.email});
    if(!user){
        res.send("no email found")
    }
    if(user.password=== req.body.password){
        alert("user login sucrssfully")
    }


    res.sendFile("pages/login.html", { root: __dirname })
})
app.post('/signup', async (req, res) => {
    console.log("insde signup",req.body)
    let user = await User.create({email:req.body.email,password:req.body.password})
    // res.redirect("/login")
    res.status(200).json({success:true, user: user}) 
})


app.post('/addnote', (req, res) => {
    const{userToken} = req.body

    res.sendFile("pages/signup.html", { root: __dirname })
})
app.post('/deletenote', (req, res) => {
    const{userToken} = req.body

    res.sendFile("pages/signup.html", { root: __dirname })
})






app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)

})

const connectDb=()=>{
    mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("mongoDb connected Succesfully");
}).catch((e)=>{
    console.log("error connecting database");
})
}
connectDb();