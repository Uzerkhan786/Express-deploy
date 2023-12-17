const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('all things are fine')
})
app.listen('3000',()=>{
    console.log('server is listening at 3000');
})