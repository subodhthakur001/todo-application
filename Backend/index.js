const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db")
const cors = require("cors");

app.use(express.json());

app.use(cors());
//Adding todo into todo list 
app.post("/todo", async function(req,res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg : "You sent the wrong input"
        })
    }
    else{
       try {
           await todo.create({
              title: createPayload.title,
              description : createPayload.description,
           })
           return res.status(200).json({msg : "Todo Created"})
       }
       catch(err){
           return res.status(500).json({msg:err})
       }
    }
})

app.get("/all-todos", async function(req,res){
    try{
        const allTodo = await todo.find()
        return res.status(200).json({allTodo})
    }
    catch(err){
        return res.status(500).json({msg:err})
    }

})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg : "You sent the wrong input"
        })
    }
    else{
        try {
            await todo.update({
                _id : req.body.id,
            },{
                completed : true
            })
            return res.status(200).json({msg : "Todo marked as completed."})
        }
        catch(err){
            return res.status(500).json({msg:err})
        }
     }
    })

app.listen(3000, () => {
    console.log("app is running on the port 3000")
})