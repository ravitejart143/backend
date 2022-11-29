const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerschema.js")

const port=4000;
console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://ravitejart143:9888@cluster0.3rsgirj.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("Created mongodb database")
	})
	.catch((err)=>{
		console.log(err)
	})
app.get("/",(req,res)=>{
})
app.post("/register",(req,res)=>{
	
	//const {username,password}=req.body
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})


app.listen(port,()=>console.log("server is started",port))


