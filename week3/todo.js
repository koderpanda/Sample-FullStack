/*Backend sytem for TODO apps
 */
const bodyparser = require("body-parser");
const express = require("express");
const fs= require("fs")
const app = express();
const port = 3000;


var todoArr=[]

app.use(bodyparser.json())
app.get('/todo',(req,res)=>{
    todoArr=fs.readFile('todo.txt')
    res.json(todoArr)
})

app.post('/todo',(req,res)=>{
    task= req.body;
    task["id"]= Math.floor(Math.random()*10000000)
    todoArr.push(req.body);
    fs.writeFile('todo.json',todoArr.toString(),(err)=>{
        if(err==null)
            console.log("Todo updated in fs")
        else{
            console.log(err)
        }
    })
    res.send(req.body)
})

app.delete('/todo/:id',(req,res)=>{
    console.log(req.params.id)
    var indexToRemove= todoArr.findIndex((item)=> item.id==req.params.id)
    console.log(indexToRemove)
    if(indexToRemove<0){
        todoArr.splice(indexToRemove,1)
        res.send(req.params.id + " Removed")
    }
    else
        res.send(400,"Invalid ID")
    
})

app.listen(port, () => {
  console.log("listening at " + port);
});
