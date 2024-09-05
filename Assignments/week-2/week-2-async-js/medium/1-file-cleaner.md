## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

```javascript

const { error } = require("console")
const fs=require("fs")
// SYNC TASK
const data=fs.readFileSync("a.txt","utf-8")
let newData=""
let i=0
while(i<data.length){
  while(i<data.length && data[i]==' '){
    i++;
  }
  let newWord=''
  while(i<data.length && data[i]!=' '){
    newWord+=data[i];
    i++;
  }
  newData+=newWord+" "
}

fs.writeFileSync("a.txt",newData,"utf-8")

```