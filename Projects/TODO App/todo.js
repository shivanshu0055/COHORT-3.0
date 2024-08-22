let todos=[]
let id=0;
render()
function addnewtask(){
    const input=document.querySelector("#textbox").value
    if(input){
    todos.push({
        id:id,
        text:input,
        doneOrNot:0
    })
    render()
    id++;
}
}

function remove(id){
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todos.splice(i,1);
            break;
        }
    }
    render()
}

function done_or_not(id){
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todos[i].doneOrNot=1-todos[i].doneOrNot;
            break;
        }
    }
    render()
}

function edit(id){
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            const task=prompt("Enter new task : ")
            if(task.length!=0){
            todos[i].text=task
            break;
            }
        }
    }
    render()
}
function render(){
    
    if(todos.length==0){

        const input=document.querySelector("#taskbox")
        input.innerHTML=""
        const mainbox=document.querySelector("#taskbox")
        const welcome=document.createElement("h1")
        welcome.textContent="Welcome! to TO-DO List"
        welcome.style="color:#EDF4F2;margin-left:20%;margin-top:20%;font-size:50px;opacity:60%;"
        mainbox.appendChild(welcome);
        console.log(welcome);

    }
    else{
    document.querySelector("#textbox").value=""
    const input=document.querySelector("#taskbox")
    input.innerHTML=""
    for(let i=0;i<todos.length;i++){
        const maindiv=document.createElement("div")
        maindiv.setAttribute("class","tasks")
        const leftdiv=document.createElement("div")
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.style="margin-right: 25px;"
        checkbox.setAttribute("onclick",`done_or_not(${todos[i].id})`)
        checkbox.setAttribute("style","height:15px; width:15px; margin-right: 25px; ")
        checkbox.checked = todos[i].doneOrNot === 1;
        const task=document.createElement("span")
        if(todos[i].doneOrNot==0){
        task.innerHTML=`${todos[i].text}`
        }
        else{
        task.innerHTML=`<strike>${todos[i].text}</strike>`    
        }
        leftdiv.appendChild(checkbox)
        leftdiv.appendChild(task)
        const right_div=document.createElement("div")
        const del_button=document.createElement("button")
        const edit_button=document.createElement("button")
        edit_button.setAttribute("class","edit_button")
        del_button.setAttribute("class","remove_button")
        del_button.textContent="Remove"
        edit_button.textContent="Edit"
        del_button.setAttribute("id",`btnNo_${todos[i].id}`)
        edit_button.setAttribute("id",`btnNo_${todos[i].id}`)
        del_button.setAttribute("onclick",`remove(${todos[i].id})`)
        edit_button.setAttribute("onclick",`edit(${todos[i].id})`)
        edit_button.style="margin-right:20px;"
        right_div.appendChild(edit_button)
        right_div.appendChild(del_button)
        maindiv.appendChild(leftdiv)
        maindiv.appendChild(right_div)
        document.querySelector("#taskbox").appendChild(maindiv)
    }
}
}
