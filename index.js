const express = require("express");
const app = express();
const path = require("path")


app.set("view engine",'ejs')
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    console.log("working")
})
dscdcsdcds
app.post("/login",(req,responce)=>{
    let {email,password} = req.body;
    const isavailable =Userdatabase.findOne({"email":email})
    .then( (res)=>{
      console.log(res);
    if(res==null) alert("user not exists please login!")
    else{
    if(res.password == password) responce.render("user_dashboard.ejs",{res})
      else alert("password is incorrect!")
    }
    })
    .catch((e)=>{
      console.log(e)
    })
})

app.listen("8080",()=>{
    console.log("server is listening")
})
