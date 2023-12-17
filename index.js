const express=require('express');
const mogoDB=require('./src/config/db')
const bodyPasrser=require('body-parser');
const user=require('./src/models/user-model')
const app=express();
app.use(bodyPasrser.urlencoded({extended:true}));

app.post('/api',async(req,res)=>{
    const u=await user.create(req.body);
    res.json({
        data:u
    })
})
app.get('/',(req,res)=>{
    res.send('Server is deployed')
})
app.get('/api',async(req,res)=>{
    const u=await user.find();
    res.json({
        data:u
    })
})

app.listen('3000',async()=>{
    await mogoDB();
    console.log('server is listening at 3000');
})