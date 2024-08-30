const express=require("express")
const app=express()
const port=3000
const fs=require("fs")

app.use(express.json())


//To show all todos listed
app.get('/todo',(req,res)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            res.send("There was a error reading the file")
        }
        else{
            const allTodos=JSON.parse(data)["allTasks"]
            res.json(allTodos)
        }
    })
    res.status(200)
})


//to add a new task
app.post('/todo',(req,res)=>{
    try{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            res.send("There was a error reading the file")
        }
        else{
            const newTask=req.body
            newTask["task"]=newTask["task"].toLowerCase()
            const allTodos=JSON.parse(data)
            allTodos["allTasks"][`${newTask.taskID}`]=newTask
            fs.writeFileSync("todos.json",JSON.stringify(allTodos,null,2))
            res.send("Succesfully Added")
            res.status(201)
        }
    })
    }
catch(err){
    console.log(err);
    res.status(400).json({message:"There was an error! Try again"})
    }
})


//to delete a particular todo
app.delete('/todo',(req,res)=>{
    try{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            res.send("There was a error reading the file")
        }
        else{
            const taskToDelete=req.body["task"]
            const allTodos=JSON.parse(data)
            for(let t in allTodos["allTasks"]){
                if(allTodos["allTasks"][t]["task"]===taskToDelete.toLowerCase()){
                    delete allTodos["allTasks"][t]
                    fs.writeFileSync("todos.json",JSON.stringify(allTodos,null,3))
                    res.send("Deleted Succesfully")
                    res.status(200)
                    return
                }
            }
            res.send("The element which you want to delete is not present in TODO")
        }
    })
}
catch(err){
    console.log(err);
    res.status(400).json({message:"There was an error! Try again"})
}
})


//edit a task to a new task
app.put('/todo',(req,res)=>{
    try{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            res.send("There was a error reading the file")
        }
        else{
            const taskToChange=req.body["oldTask"]
            const newTask=req.body["newTask"]
            const allTodos=JSON.parse(data)
            for(let t in allTodos["allTasks"]){
                if(allTodos["allTasks"][t]["task"]===taskToChange.toLowerCase()){
                    allTodos["allTasks"][t]["task"]=newTask.toLowerCase()
                    fs.writeFileSync("todos.json",JSON.stringify(allTodos,null,3))
                    res.send("Updated Succesfully")
                    res.status(200)
                    return
                }
            }
        }
    })
}
catch(err){
    console.log(err);
    res.status(400).json({message:"There was an error! Try again"})
}
})


//marking a task as done
app.put('/todo/markAsDone',(req,res)=>{
    try{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            res.send("There was a error reading the file")
        }
        else{
            const completedTask=req.body["completedTask"]
            const allTodos=JSON.parse(data)
            for(let t in allTodos["allTasks"]){
                if(allTodos["allTasks"][t]["task"]===completedTask.toLowerCase()){
                    allTodos["allTasks"][t]["status"]=true
                    allTodos["doneTasks"][t]=allTodos["allTasks"][t]
                    fs.writeFileSync("todos.json",JSON.stringify(allTodos,null,3))
                    res.send("Updated Succesfully")
                    res.status(200)
                    return
                }
            }
            res.send("The element which you want to markAsDone is not present in TODO")
            
        }
    })
}
catch(err){
    console.log(err);
    res.status(400).json({message:"There was an error! Try again"})
}
})


app.listen(port,()=>{
    console.log("Server is running is on port 3000 ....");
})
