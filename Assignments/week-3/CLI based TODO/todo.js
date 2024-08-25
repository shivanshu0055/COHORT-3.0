const {Command} =require("commander")
const program=new Command()
const fs= require("fs")
program
.name("TODO")
.description("Task Handling")

//ADDING A TASK
program.command("addTask")
.description("To Add a Task in TODO List")
.argument("<task...>","Task")
.action((task)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);  
        }
        else{
            let todoJSON=data;
            todoJSON=JSON.parse(todoJSON)
            let newID=Object.keys(todoJSON["allTasks"]).length+1
            todoJSON["allTasks"][`task${newID}`]={
                "taskID":`${newID}`,
                "task":task.join(" ").toLowerCase(),
                "status":false
            }
            fs.writeFileSync("todos.json",JSON.stringify(todoJSON,null,4))
        }
    })
})

//delete whole list
program.command("delete")
.description("To Delete all the tasks in TODO List")
.action(()=>{
    fs.writeFileSync("todos.json",`{
    "allTasks": {},
    "doneTasks": {},
    "deletedTasks": {}
}`)
})

//MARK AS DONE
program.command("markAsDone")
.description("To mark a Task as Done")
.argument("<task...>","Task to be marked as done")
.action((task)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);  
        }
        else{
        let todoJSON=JSON.parse(data)
        for(let tasks in todoJSON["allTasks"]){
            if(todoJSON["allTasks"][tasks]["task"]===task.join(" ").toLowerCase()){
                todoJSON["allTasks"][tasks]["status"]=true
                todoJSON["doneTasks"][tasks]={
                "taskID": tasks[4],
                "task":task.join(" ").toLowerCase(),
                "status":true
                }
                fs.writeFileSync("todos.json",JSON.stringify(todoJSON,null,4))
                return
            }
        }
        console.log("The Task has not been registered yet");
        }
    })
})

//SEE COMPLETED TASKS
program.command("showDoneTasks")
.description("To get a list of completed Tasks")
.action(()=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);  
        }
        else{
        let todoJSON=JSON.parse(data)
        for(let tasks in todoJSON["allTasks"]){
            if(todoJSON["allTasks"][tasks]["status"]===true){
                console.log(todoJSON["allTasks"][tasks]);   
            }
        }
        }
    })
})

//REMOVING A TASK
program.command("removeTask")
.description("To remove a task from the list")
.argument("<task...>","Task to be marked as done")
.action((task)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);  
        }
        else{
        let todoJSON=JSON.parse(data)
        for(let tasks in todoJSON["allTasks"]){
            if(todoJSON["allTasks"][tasks]["task"]===task.join(" ").toLowerCase()){
                todoJSON["deletedTasks"][tasks]={
                    "taskID": tasks[4],
                    "task":task.join(" ").toLowerCase(),
                    "status":true
                    }
                delete todoJSON["allTasks"][tasks]
                fs.writeFileSync("todos.json",JSON.stringify(todoJSON,null,4))
                return
            }
        }
        console.log("The Task has not been registered yet");
        }
    })
})

//LIST OF ALL TASKS
program.command("showTasks")
.description("To get a list of Tasks")
.action(()=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);  
        }
        else{
        let todoJSON=JSON.parse(data)
        for(let tasks in todoJSON["allTasks"]){
                console.log(todoJSON["allTasks"][tasks]);   
        }
        }
    })
})

program.parse()
