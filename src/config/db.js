const mongoose=require('mongoose')
const {MONGO_URI}=require('./config')
const mogoDB=async()=>{
    await mongoose.connect(MONGO_URI,{
        useUnifiedTopology:true,
    useNewUrlParser:true});
   console.log('database is connected');
}
module.exports=mogoDB;