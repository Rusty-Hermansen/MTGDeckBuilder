// CRUD user, deck, and card
import express from 'express'

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(4000,()=>{
    //Any logic that needs to happen as the server starts goes here. 
    console.log("started on port 4000");
});
app.get('/',(req, res)=>{
    res.send("Welcome to the Magic Deckbuilder API");
});
//query strings
app.get('/paramstest',(req, res)=>{
    let test= req.query.test;
    console.log(test);
    res.send(test);
})
//parameters
app.get('/params/:test',(req, res)=>{
    let test= req.params.test;
    console.log(test);
    res.send(test);
})
app.post('/endpoint', (req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    console.log("username:", username, " password: ", password);
    res.send({username, password});
})