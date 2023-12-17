const mongoose=require('mongoose')

const mogoDB=async()=>{
    await mongoose.connect('mongodb+srv://kuzer9911:Uf2iZWmD7CyI3l4x@cluster0.b1vseet.mongodb.net/expressPro?retryWrites=true&w=majority');
   console.log('database is connected');
}
module.exports=mogoDB;