## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```javascript
let counter=0

function counterInc(time){
  setTimeout(()=>{
    console.log(counter)
    counter++;
    counterInc(1000)
  },time)
}

counterInc(1000)
```






































































(Hint: setTimeout)