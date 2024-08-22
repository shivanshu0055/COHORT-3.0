/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

    constructor(){
      this.todo=[]
    }
    add(todotask){
      this.todo.push(todotask)
    }
    remove(index){
      this.todo.splice(index, 1);
    }
    update(index,val){
      if(index>=0 && index<this.todo.length){
      this.todo[index]=val
      }
    }
    getAll(){
      return this.todo
    }
    get(index){
      if(index>=0 && index<this.todo.length){
      return this.todo[index]
      }
      return null
    }
    clear(){
      this.todo=[]
    }
}   
module.exports = Todo;
