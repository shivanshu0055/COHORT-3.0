## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```javascript
const { error } = require("console")
const fs=require("fs")
// SYNC TASK
fs.writeFileSync("a.txt","Hello guys welcome to this assignment","utf-8")

fs.writeFile("a.txt","Hello girls","utf-8",(err)=>{
  if(err){
  console.log(err)
    return
  }
  console.log("Data has been written")
})
```