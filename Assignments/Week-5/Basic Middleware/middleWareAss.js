const express=require("express")
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())
const port=3000
let numOfRequest=0

app.get("/numOfReq",(req,res)=>{
    console.log("Total number of requests sent are : "+numOfRequest)
    res.send("Total number of requests sent are : "+numOfRequest)
})

app.use((req,res,next)=>{
    console.log("Request Method is : "+req.method);
    console.log("URL is : "+req.url);
    console.log("Request Time is : "+Date.now());
    next()
})

app.use((req,res,next)=>{
    numOfRequest++;
    next()
})

app.get("/add",(req,res)=>{
    res.send("Addition")
})  
   
app.get("/sub",(req,res)=>{
    res.send("Subtarction")
}) 

app.get("/divide",(req,res)=>{
    res.send("Divide")
})

app.get("/mul",(req,res)=>{ 
    res.send("Multiplication")
})

app.listen(port,()=>{ 
    console.log("Server is Running ....");
})

 